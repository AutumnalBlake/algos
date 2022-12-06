import { Box, Typography } from '@mui/material'
import React from 'react'
import { noOp } from '../helpers'
import AlgoCard from './AlgoCard'
import PropTypes from 'prop-types'
import { Stack } from '@mui/system'
import Badge from './Badge'

export default function CardArray ({ items = [], onClick = noOp, lo, hi }) {
  return <Box
    display={'flex'}
    flexWrap={'wrap'}
    margin={2}
    gap={items.length <= 8 ? 2 : 1}
    justifyContent={'center'}
  >
    {items.map((d, i) => {
      const { value, selected = false, flipped = false, disabled = false } = d
      return <Box key={value.toString() + i}>
        <AlgoCard
          value={value}
          selected={selected}
          flipped={flipped}
          disabled={disabled}
          size={items.length <= 8 ? 'lg' : 'sm'}
          onClick={() => onClick(i)}
        />
        <Stack direction={'row'} spacing={2} justifyContent={'center'}>
          <Typography
            fontSize={'1.5em'}
            color={disabled ? 'grey.A400' : 'black'}
          >
            {i}
          </Typography>
          {i === lo ? <Badge>LO</Badge> : null}
          {i === hi ? <Badge>HI</Badge> : null}
        </Stack>
      </Box>
    }

    )}
  </Box>
}

CardArray.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.node.isRequired,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    flipped: PropTypes.bool
  })),
  onClick: PropTypes.func,
  lo: PropTypes.number,
  hi: PropTypes.number
}
