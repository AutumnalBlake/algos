import React from 'react'
import './App.css'
import TimeComplexityVis from './Pages/TimeComplexityVis'
import NavBar from './NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BinarySearch from './Pages/BinarySearch'
import LogTime from './Pages/LogTime'

// const nums = [1, 13, 16, 18, 19, 20, 56, 102, 103, 104]

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<TimeComplexityVis/>} />
          <Route path={'/time-complexity-mosaic'} element={<TimeComplexityVis/>} />
          <Route path={'/binary-search'} element={<BinarySearch/>} />
          <Route path={'/log-time'} element={<LogTime/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
