import React from 'react'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout