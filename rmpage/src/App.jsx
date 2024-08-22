import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import NavBar from 'taskpage/NavBar';
import RmTable from "./RmTable";
const App = () => (
  <div className="container">
    <NavBar />
    <div>Name: rmpage</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <RmTable />
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)