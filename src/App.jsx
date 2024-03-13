import supabase from './config/supabaseClient.js'
import './App.css'
import {useEffect, useState} from 'react'

// * Component Imports 
import Navbar from './components/navbar.jsx'
import Card from './components/card.jsx'

// const cardData = [
//   { id: 1, title: "Shoes 1", description: "Description for Shoes 1", tags: ["product", "Shoes"] },
//   { id: 2, title: "Shoes 2", description: "Description for Shoes 2", tags: ["product", "Shoes"] },
//   { id: 3, title: "Shoes 3", description: "Description for Shoes 3", tags: ["product", "Shoes"] },
//   { id: 4, title: "Shoes 10", description: "Description for Shoes 10", tags: ["product", "Shoes"] },
// ];


function App() {
// TODO: We have to retrieve our data from supabase

  return (
    <>
    <Navbar/>
    {/* How do we create these cards based?  */}
      </>
  )
}

export default App
