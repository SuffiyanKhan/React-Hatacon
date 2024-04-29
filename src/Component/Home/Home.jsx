import React from 'react'
import AppNavbar from '../Navbar/Navbar'
import AllProuducts from '../AllProducts/AllProuducts'
import RenderAllProducts from '../AllProducts/AllProuducts'

function AppHome() {
  return (
    <div>
      <AppNavbar />
      <RenderAllProducts/>
    </div>
  )
}

export default AppHome