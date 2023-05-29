import "./editor.css"

import { useContext } from "react";

import { EditorContext } from "../../routes/app/app";

export default function Editor() {
    const [editorState, setEditorState] = useContext(EditorContext);

    function handleTitle(event) {
        if (event.key == "Enter") {
            const input = document.getElementById("title-input").value;

            editorState.setTitle(input);
        }
    }
    
    function handleMain(event) {
        const input = document.getElementById("main-input").value;

        editorState.setDescription(input);
    }

    return (
        <div className="panel">
            <input
                type="text"
                className="title-input"
                id="title-input"
                defaultValue={editorState.title}
                onKeyPress={handleTitle}
            />

            <textarea
                className="main-input"
                id="main-input"
                defaultValue={editorState.description}
                onChange={handleMain}
            />
        </div>
    );
}