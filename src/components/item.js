import './item.css'

// to be used
import Draggable, {DraggableCore} from 'react-draggable'

export default function Item({title, description, callback}) {
  function handleDrag() {
  }
  
  return (
    <div className="item">
      <img className="thumbnail" src="thumbnail.png" />

      <div className="text-section">
        <p className="title"> {title} </p>

        <p className="description"> {description} </p>
      </div>

      <div className="corner-button">
          Hello
      </div>
    </div>
  )
}