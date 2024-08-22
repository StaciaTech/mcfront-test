import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import TaskPage from "./TaskPage";
import NavBar from "./NavBar";
// remote entries
import RmTable from 'rmpage/RmTable'
import Layout from "./Layout";
const App = () => (
  <div className="container">
    <NavBar />
    <Layout />
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)