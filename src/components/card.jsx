export default function Card(props){

  return(<>
  <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    {/* What should we put for the title?  */}
    <h2 className="card-title">
      TODO: 1
      <div className="badge badge-secondary">NEW</div>
    </h2>
    {/* What should we put for the description? */}
    <p>TODO: 2</p>
    <div className="card-actions justify-end">

      <div className="badge badge-outline">TODO: 3</div>
    </div>
  </div>
</div>
  </>)
}