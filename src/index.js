import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./routes/app/app.js";
import Todo from "./routes/todo/todo.js";
import Dashboad from "./routes/dashboard/dashboard.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "dashboard",
        element: <Dashboad />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);