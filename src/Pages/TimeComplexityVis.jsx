import { Divider, FormControlLabel, Paper, Slider, Switch, Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react'
import MathDisplay from '../Components/MathDisplay'
import VisSquares from '../Components/VisSquares'
import { intLog } from '../helpers'

export default function TimeComplexityVis () {
  const [n, setN] = React.useState(2)
  const [showColours, setShowColours] = React.useState(true)

  const complexities = [
    {
      bigO: 'O(1)',
      desc: 'Constant time - does not depend on input size',
      eq: '1',
      rows: 1,
      cols: 1
    },
    {
      bigO: 'O(\\log n)',
      desc: 'Halving the input size until only one element remains (e.g. binary search)',
      eq: `\\log_2 ${n} = ${intLog(n)}`,
      rows: 1,
      cols: intLog(n)
    },
    {
      bigO: 'O(n)',
      desc: 'Linear time - processing each input element in constant time',
      eq: `${n}`,
      rows: 1,
      cols: n
    },
    {
      bigO: 'O(n \\log n)',
      desc: 'Efficient sorting algorithms',
      eq: `${n} \\times \\log_2 ${n} = ${n * intLog(n)}`,
      rows: intLog(n),
      cols: n
    },
    {
      bigO: 'O(n^2)',
      desc: 'Quadratic time - processing each pair of elements',
      eq: `${n}^2 = ${n ** 2}`,
      rows: n,
      cols: n
    },
    {
      bigO: 'O(2^n)',
      desc: 'Exponential time - processing each subset of the input elements',
      eq: `2^{${n}} = ${2 ** n}`,
      rows: n > 10 ? 1 : 2 ** Math.floor(n / 2),
      cols: n > 10 ? 2 ** n : 2 ** Math.ceil(n / 2) // Let wrapping handle layout for large n
    }
  ]

  return <Container width={'100%'}>

    <Paper sx={{
      m: 5, px: 5, py: 2
    }}>
      {/* Intro */}
      <Typography>
        This tool provides a visualisation of common algorithm time complexities. <br />
        For large values of n, the display my take quite a while to render - this shows how
        exponential time algorithms can blow up quickly :)
      </Typography>

      {/* n picker */}
      <Stack
        spacing={2}
        direction={'row'}
        alignItems={'center'}
      >
        <MathDisplay text={`n = ${n}`} />

        <Slider
          slotProps={{ rail: () => ({ bgcolor: 'red' }) }}
          marks
          min={1}
          max={15}
          value={n}
          onChange={(e, val) => setN(val)}
        />
      </Stack>
      <FormControlLabel control={<Switch checked={showColours} onChange={e => setShowColours(e.target.checked)} />} label="Show colours" />
    </Paper>

    {complexities.map(c => <div key={c.bigO}>
      <MathDisplay text={c.bigO} />
      <Typography>{c.desc}</Typography>
      <MathDisplay text={c.eq} />
      <VisSquares rows={c.rows} cols={c.cols} colour={showColours} />
      <Divider sx={{ my: 3 }} />
    </div>)}

  </Container>
}
