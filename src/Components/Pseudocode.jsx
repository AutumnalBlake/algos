import React from 'react'
import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const TAB_SIZE = 3

export default function Pseudocode ({ children, current, title, boxProps }) {
  const isCurrent = i => current === i || (Array.isArray(current) && current.includes(i))

  const indentation = str => {
    let ind = 0
    for (const c of str) {
      if (c !== ' ') return TAB_SIZE * ind
      ind++
    }
  }

  return <Box {...boxProps}>
    {title
      ? <Typography fontSize={'1.4em'} sx={{ textDecoration: 'underline', fontVariant: 'small-caps' }}>{title}</Typography>
      : null
    }
    {children.map((c, i) =>
      <Typography
        fontSize={'1.4em'}
        textAlign={'left'}
        key={i}
        fontWeight={isCurrent(i) ? 'bold' : 'normal'}
        color={isCurrent(i) ? 'secondary.main' : 'black'}
        sx={{ pl: indentation(c) }}
      >
        {c.trim()}
      </Typography>
    )}
  </Box>
}

Pseudocode.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string),
  current: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ]),
  title: PropTypes.string,
  boxProps: PropTypes.object
}
