import "./item.css";

// to be used
import Draggable, { DraggableCore } from "react-draggable";

export default function Item({ props, callback }) {
  return (
    <div className="item">
      <img className="thumbnail" src="thumbnail.png" alt="" />

      <div className="text-section">
        <p className="title"> {props.title} </p>

        <p className="description"> {props.description} </p>
      </div>

      <div
        className="corner-button"
        onClick={() => {
          callback(props.id);
        }}
      ></div>
    </div>
  );
}
