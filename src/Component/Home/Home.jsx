import React from 'react'
import AppNavbar from '../Navbar/Navbar'
import AllProuducts from '../AllProducts/AllProuducts'
import RenderAllProducts from '../AllProducts/AllProuducts'
import NavigationLinks from '../NavigationLinks/NavigationLinks'

function AppHome() {
  return (
    <div>
      {/* <AppNavbar /> */}
      
      <NavigationLinks/>
      <RenderAllProducts/>
    </div>
  )
}

export default AppHome