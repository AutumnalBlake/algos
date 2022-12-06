import { Card, CardContent, Typography } from '@mui/material'
import ReactCardFlip from 'react-card-flip'
import { noOp } from '../helpers'
import React from 'react'
import PropTypes from 'prop-types'

export default function AlgoCard ({
  cardProps,
  value,
  selected = false,
  flipped = false,
  disabled = false,
  size = 'lg',
  onClick = noOp
}) {
  // Size variables
  const s = {
    lg: {
      font: '5em',
      width: 150,
      height: 200
    },
    sm: {
      font: '3em',
      width: 100,
      height: 120
    }
  }[size]

  const baseStyle = {
    borderRadius: 5,
    width: s.width,
    height: s.height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const selectedStyle = { bgcolor: 'primary.light' }

  const flippedStyle = { bgcolor: 'grey.A200' }

  const disabledStyle = {
    bgcolor: 'grey.50',
    color: 'grey.A400'
  }

  const getStyle = (s, f, d) => {
    let style = { ...baseStyle }
    if (s) style = { ...style, ...selectedStyle }
    if (f) style = { ...style, ...flippedStyle }
    if (d) style = { ...style, ...disabledStyle }
    return style
  }

  return <ReactCardFlip
    containerClassName={!disabled && flipped ? 'algoCardClickable' : ''}
    flipSpeedBackToFront={0.4}
    flipSpeedFrontToBack={0.4}
    isFlipped={flipped}
    flipDirection={'horizontal'}
  >
    <Card
      sx={getStyle(selected, false, disabled)}
      {...cardProps}
      onClick={onClick}
      elevation={disabled ? 0 : 2}
    >
      <CardContent>
        <Typography fontSize={s.font}>
          {value}
        </Typography>
      </CardContent>
    </Card>
    <Card
      sx={getStyle(selected, true, disabled)}
      {...cardProps}
      onClick={onClick}
      elevation={disabled ? 0 : 2}
    >
      <CardContent>
        <Typography fontSize={s.font}>
        </Typography>
      </CardContent>
    </Card>
  </ReactCardFlip>
}

AlgoCard.propTypes = {
  cardProps: PropTypes.object,
  value: PropTypes.node,
  selected: PropTypes.bool,
  flipped: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'sm']),
  onClick: PropTypes.func
}
