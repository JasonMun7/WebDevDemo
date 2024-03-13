import {Link} from 'react-router-dom'

export default function Card(props){

  return(<>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">
      {/* TODO: 1 */}
    </h2>
    <p>
      {/* TODO: 2 */}
    </p>
    <div className="card-actions">
       {/* TODO: 3 */}
    </div>
  </div>
</div>
  </>)
}