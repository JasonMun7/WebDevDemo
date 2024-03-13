export default function Card(props){

  return(<>
  <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {/* TODO: 1 */}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>
      {/* TODO: 2 */}
    </p>
    <div className="card-actions justify-end">
      {/* TODO: 3 */}
    </div>
  </div>
</div>
  </>)
}