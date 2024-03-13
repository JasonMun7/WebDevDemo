import supabase from '../config/supabaseClient.js'
import {useEffect, useState} from 'react'

// * Component Imports 
import Card from '../components/card.jsx'

export default function Home(){
// TODO: How Do we Retrieve our Data? 

  return(<>
{fetchError && (<p>{fetchError}</p>)}

<div className='flex flex-row justify-between px-10 py-10'>
{/* How Do we Display Our Cards?  */}
</div>
  </>)
}