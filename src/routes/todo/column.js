import "./todo.css";

import { useContext, useState } from "react";

import Item from "../../components/item";
import Button from "../../components/button"

import { EditorContext } from "../app/app";

export default function Column({props, popupCallback, buttonCallback}) {
    const [editorState, setEditorState] = useContext(EditorContext);

    function itemClick(title, setTitle, description, setDescription) {
        if (editorState.enabled) {
            setEditorState((prevState) => ({
                ...prevState,
                enabled: false
            }));
        } else {
            // on item click, it item.js call the clickCallback function and pass in \
            // info props back into this function

            const newEditorState = {
                enabled: true,

                title: title,
                setTitle: setTitle,

                description: description,
                setDescription: setDescription,
            }

            setEditorState(newEditorState);
        }
    }

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
                    clickCallback={itemClick}
                    buttonCallback={buttonCallback}
                />
            ))}
        </div>
    );
}