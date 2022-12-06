import { Card } from '@mui/material'
import React from 'react'

export default function SlideCardSlot () {
  return <Card
    elevation={0}
    sx={{
      borderRadius: 5,
      outline: '5px solid #AAAAAA',
      outlineOffset: -5,
      bgcolor: 'transparent',
      width: 150,
      height: 200
    }}
  ></Card>
}
