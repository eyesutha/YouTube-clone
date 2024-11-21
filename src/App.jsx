import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WatchVideo from './pages/WatchVideo'
import ShortVideo from './pages/ShortVideo'
import Search from './pages/Search'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/search/:searchQuery' element={<Search />} />
        <Route path='/watch/:id' element={<WatchVideo />} />
        <Route path='/short/:id' element={<ShortVideo />} />
      </Routes>
    </div>
  )
}

export default App