import "./item.css";

import { useState } from "react";
import { click } from "@testing-library/user-event/dist/click";

// to be used
// import Draggable, { DraggableCore } from "react-draggable";

export default function Item({ props, clickCallback, buttonCallback }) {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);

    return (
      <div className="item" onClick={() => {
        clickCallback(title, setTitle, description, setDescription);
      }}>
        <img className="thumbnail" src="thumbnail.png" alt="" />

        <div className="text-section">
          <p className="title"> {title} </p>

          <p className="description"> {description} </p>
        </div>

        <div
          className="corner-button"
          onClick={() => {
            buttonCallback(props.id);
          }}
        ></div>
      </div>
    );
}
