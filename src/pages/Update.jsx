import {useParams} from 'react-router-dom'

export default function Update(){
  const {id} = useParams()

  return(
    <>
    <div>This is the shoe id {id}</div>
    </>
  )
}