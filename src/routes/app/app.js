import "./app.css";

import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";

import Item from "../../components/item";
import Button from "../../components/button";
import NavBar from "../../components/nav/navbar";
import Editor from "../../components/editor/editor"

export const EditorContext = createContext(null);
export const ProjectContext = createContext(null)

function App() {
  const defaultEditorState = {
    enabled: false,

    title: "",
    setTitle: () => {void 0;},

    content: "",
    setContent: () => {void 0;}
  };
  const [editorState, setEditorState] = useState(defaultEditorState);

  // projects

  const defaultColumns = [
    {
      id: 0,
      title: "To-do",
      items: [],
    },
    {
      id: 1,
      title: "Doing",
      items: [],
    },
    {
      id: 2,
      title: "Done",
      items: [],
    },
  ];

  const [projects, setProjects] = useState([defaultColumns]);

  return (
    <EditorContext.Provider value={[editorState, setEditorState]}>
      <ProjectContext.Provider value={[projects, setProjects]}>
        <div className="app">

          {editorState.enabled && <Editor/>}

          <div id="detail">
            <Outlet />
          </div>
        </div>
      </ProjectContext.Provider>
    </EditorContext.Provider>
  );
}

export default App;
