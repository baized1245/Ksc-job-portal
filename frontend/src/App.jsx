import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './cmponents/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
