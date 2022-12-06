import { AppBar, Button, Slide, Toolbar, Typography, useScrollTrigger } from '@mui/material'
import { Stack } from '@mui/system'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { objMap } from './helpers'

const menuPages = {
  'Time Complexity': '/time-complexity-mosaic',
  'Binary Search': '/binary-search',
  'O(log n) time': '/log-time'
}

export default function NavBar () {
  return <HideOnScroll>
    <AppBar position={'sticky'}>
      <Toolbar>
        <Stack direction={'row'} spacing={3} alignItems={'center'}>
          <Typography variant={'h6'} sx={{ fontVariant: 'small-caps' }} >
            DsaToolkit
          </Typography>
          {objMap(menuPages, (title, link) =>
            <Button key={title} component={Link} to={link} color={'inherit'}>
              { title }
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  </HideOnScroll>
}

function HideOnScroll ({ children }) {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = { children: PropTypes.element.isRequired }
