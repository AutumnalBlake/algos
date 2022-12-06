import { Container, Divider, Slider, Typography } from '@mui/material'
import React, { useState } from 'react'

import MathDisplay from '../Components/MathDisplay'
import VisSquares from '../Components/VisSquares'
import { intLog } from '../helpers'

export default function LogTime () {
  const [n, setN] = useState()

  return <Container sx={{ mb: 20 }}>
    <Typography variant={'h2'} sx={{ py: 5 }}>
      <MathDisplay text={'O(\\log n)'}/>
    </Typography>
    <Divider sx={{ mb: 2 }} />
    <Typography variant={'body1'}>
      <MathDisplay inline text={
        'You may already know that we can halve the size of an input $$\\log n$$ times before there is only one element left.'
      } />
      Why is this? <br /><br />
      <MathDisplay inline text={
        'Let\'s suppose we have an input of size $$n$$ - like an array of $$n$$ elements. We want ' +
        'to know how many times we need to split the array in half to find a particular element. ' +
        'Since halving is the same as multiplying by 1/2, the equation we need to solve is'
      } /><br />
      <MathDisplay text={
        'n \\times \\underbrace{1/2 \\times 1/2 \\times \\cdots \\times 1/2}_{k \\text{ times}} = 1.'
      }/><br />
      We can rewrite this using powers, to give
      <MathDisplay text={'n \\times (1/2) ^ k = 1.'} />
      <MathDisplay inline text={
        'Using index laws, the left hand side is equivalent to $$n \\times 1^k/2^k$$, which is $$n/2^k$$.'
      }/><br />
      <MathDisplay inline text={
        'Now, we just need to move $$k$$ to the other side - we multiply by $$2^k$$, giving $$n = 2^k$$. ' +
        'Finally, we can take the log of both sides - we have $$\\log_2 n = \\log_2 2^k$$, so $$log_2 n = k$$.'
      }/><br />
      <MathDisplay inline text={
        'So there we go! We need to halve an array of size $$n$$ about $$log_2 n$$ times before we\'re left with one element. Since all logs just differ by a constant factor, and we ignore constant factors in big-O notation, we write this as $$O(\\log n)$$.'
      } /><br />
      The great thing about this result is that log n is much smaller than n - in fact, if we double n, log n only increases by 1. This means that algorithms that run
      in O(log n) time are very efficient! <br />
      To illustrate, here&apos;s a demonstration of how slowly log n grows.
    </Typography>
    <Slider
      min={1}
      max={1000}
      onChange={(e, v) => setN(v)}
    />
    log n
    <VisSquares rows={1} cols={intLog(n)} colour={false} />
    n
    <VisSquares rows={1} cols={n} colour={false} />
  </Container>
}
