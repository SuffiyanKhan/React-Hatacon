import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import PageNotFound from '../Component/PageNotFound/PageNotFound'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Config/FirebaseConfig'
function Routing() {
  const [user,setUser]=useState(false)
 useEffect(()=>{
  (()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(true)
      } 
    });
  })()
 })
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='*' element={<PageNotFound/>} />
            <Route path='/' element={user ? <Home/> : <Navigate to={'/login'} />} />
            <Route path='/signup' element={user ? <Navigate to={'/'} />: <Signup/>} />
            <Route path='/login' element={user ? <Navigate to={'/'} />: <Login/>} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing
