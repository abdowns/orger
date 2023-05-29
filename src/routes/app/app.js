import "./app.css";

import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";

import Item from "../../components/item";
import Button from "../../components/button";
import NavBar from "../../components/nav/navbar";
import Editor from "../../components/editor/editor"

export const EditorContext = createContext(null);

function App() {
  const defaultEditorState = {
    enabled: false,

    title: "",
    setTitle: () => {void 0;},

    content: "",
    setContent: () => {void 0;}
  };
  const [editorState, setEditorState] = useState(defaultEditorState);

  return (
    <EditorContext.Provider value={[editorState, setEditorState]}>
      <div className="app">
        <NavBar />

        {editorState.enabled && <Editor/>}

        <div id="detail">
          <Outlet />
        </div>
      </div>
    </EditorContext.Provider>
  );
}

export default App;
