import supabase from './config/supabaseClient.js'
import './App.css'
import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"



// * Component Imports 
import Navbar from './components/navbar.jsx'

// * Page Imports 
import Home from './pages/Home.jsx'
import Create from './pages/Create.jsx'
import Update from './pages/Update.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
      </>
  )
}

export default App
