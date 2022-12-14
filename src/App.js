import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";

const App = () => {
  return (
    <div className="App">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-content">
        <Outlet />
        {/* app content */}
      </div>
    </div>
  );
};
export default App;
