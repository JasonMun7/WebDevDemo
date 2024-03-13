import supabase from '../config/supabaseClient.js'
import {useEffect, useState} from 'react'

// * Component Imports 
import Card from '../components/card.jsx'

export default function Home(){
  const [fetchError, setFetchError] = useState(null)
  const [data, setData] = useState(null)

// TODO: How do we get our Data from Supabase? 

  return(<>
{fetchError && (<p>{fetchError}</p>)}

<div className='flex flex-row flex-wrap justify-between gap-y-10 px-10 py-10'>
 {/* TODO: How are we able to display our cards? */}
</div>
  </>)
}