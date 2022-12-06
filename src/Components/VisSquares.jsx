import React from 'react'
import PropTypes from 'prop-types'
import { randChoice, range } from '../helpers'
import { Box, Stack } from '@mui/material'

const GAP = 0.4

export default function VisSquares ({ rows, cols, colour = true }) {
  return <Stack direction={'column'} gap={GAP}>
    {range(rows).map(i =>
      <Stack key={i} direction={'row'} gap={GAP} justifyContent={'center'} flexWrap={'wrap'}>
        {range(cols).map(j => <Square colour={colour} key={j}/>)}
      </Stack>
    )}
  </Stack>
}

VisSquares.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  colour: PropTypes.bool
}

function Square ({ colour }) {
  const colours = ['#FB3640', '#605F5E', '#1D3461', '#1F487E', '#247BA0']

  return <Box
    width={10}
    height={10}
    bgcolor={colour ? randChoice(colours) : 'black'}
  >
  </Box>
}

Square.propTypes = { colour: PropTypes.bool }
