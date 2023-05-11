import './Item.css'

export default function Item({title, description}) {
  return (
    <div className="item">
      <img className="thumbnail" src="thumbnail.png" />

      <div className="text-section">
        <p className="title"> {title} </p>

        <p className="description"> {description} </p>
      </div>
    </div>
  )
}