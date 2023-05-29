import "./todo.css";

import { useState } from "react";

import Item from "../../components/item";
import Button from "../../components/button"

export default function Column({props, popupCallback, buttonCallback}) {
    return (
        <div className="column">
            
            <div className="column-header">
                <p className="column-title"> {props.title} </p>

                <button 
                onClick={() => {
                    popupCallback(props.id)
                }}
                className="add-button">
                    +
                </button>
            </div>

            {props.items.map((itemProps, i) => (
                <Item
                    key={i}
                    props={itemProps}
                    callback={buttonCallback}
                />
            ))}
        </div>
    );
}