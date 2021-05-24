import React from "react";
import "./App.css";
import Sidebar from"./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return <div className="app">

    {/* left static sidebar */}
    <Sidebar/>

    {/* center feed */}
    <Feed/>

    {/* right static widget */}
    <Widgets/>
  </div>;
}

export default App;
