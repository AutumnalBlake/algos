import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'

export default function Badge ({ children, colour = 'primary.main' }) {
  return <Box
    width={'max-content'}
    borderRadius={10}
    bgcolor={colour}
    sx={{ px: 2 }}
    display={'flex'}
    alignItems={'center'}
  >
    <Typography
      fontWeight={'bold'}
      color={'white'}
    >
      {children}
    </Typography>
  </Box>
}

Badge.propTypes = {
  children: PropTypes.node,
  colour: PropTypes.string
}
