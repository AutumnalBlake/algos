import { Button, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardArray from '../Components/CardArray'
import Pseudocode from '../Components/Pseudocode'
import { randInt, range } from '../helpers'

const MAX = 18

export default function BinarySearch () {
  const [lo, setLo] = useState()
  const [hi, setHi] = useState()
  const [mid, setMid] = useState(0)
  const [target, setTarget] = useState()
  const [state, setState] = useState()
  const [checked, setChecked] = useState([])
  const [showHint, setShowHint] = useState(false)

  const init = () => {
    setTarget(randInt(MAX * 2))
    setState('findMid')
    setChecked([])
    setLo(0)
    setHi(MAX - 1)
    setMid(0)
  }

  const items = range(MAX).map(n => ({
    value: n * 2, flipped: !checked.includes(n), disabled: n < lo || n > hi
  }))

  const handleClick = i => {
    switch (state) {
      case 'updateBounds':
        if (items[mid].value < target && i === mid + 1) {
          const newLo = mid + 1
          setLo(newLo)
          setState(newLo <= hi ? 'findMid' : 'notFound')
          setShowHint(false)
        } else if (items[mid].value > target && i === mid - 1) {
          const newHi = mid - 1
          setHi(newHi)
          setState(lo <= newHi ? 'findMid' : 'notFound')
          setShowHint(false)
        }
        break

      case 'findMid':
        if (i === Math.floor((lo + hi) / 2)) {
          setChecked(c => [...c, i])
          setMid(i)
          setState(items[i].value === target ? 'end' : 'updateBounds')
          setShowHint(false)
        }
        break

      default:
        break
    }
  }

  useEffect(init, [])

  const hints = {
    findMid: `LO = ${lo} and HI = ${hi}, so (LO + HI) / 2 = ${Math.floor((lo + hi) / 2)}.`,
    updateBounds: `We're looking for ${target}, but index ${mid} had ${items[mid].value}. This means ${target} must be at an index ${items[mid].value > target ? 'lower' : 'higher'} than ${mid}.`
  }

  return <Grid container>
    <Grid item xs={8} height={'calc(100vh - 64px)'} overflow={'scroll'}>
      <Paper sx={{ m: 3, p: 3 }}>
        <Typography>Target: {target}</Typography>
      </Paper>
      <CardArray items={items} lo={lo} hi={hi} onClick={handleClick} />
    </Grid>
    <Grid item>
      <Pseudocode boxProps={{ margin: 3 }} title={'Binary Search'} current={{
        findMid: 2,
        updateBounds: [4, 5],
        end: 3,
        notFound: 6
      }[state]}>
        {'Initialise LO to 0 and HI to n'}
        {'While LO ≤ HI:'}
        {' Check A[(LO + HI) / 2]'}
        {' If = target, we\'re done!'}
        {' If > target, set HI to MID - 1'}
        {' If < target, set LO to MID + 1'}
        {'Target is not in A.'}
      </Pseudocode>
      <Button variant={'outlined'} onClick={init}>Reset</Button>
      <Button variant={'outlined'} onClick={() => setShowHint(true)}>Hint</Button>
      {showHint
        ? <Typography>
          {hints[state]}
      </Typography>
        : null}
    </Grid>
  </Grid>
}
