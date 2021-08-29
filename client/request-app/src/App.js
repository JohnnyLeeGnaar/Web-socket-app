import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Client from "./components/Client";

function App() {
  return (
    <>
      <div className="flex-client-wrapper">
        <Client></Client>
      </div>
    </>
  );
}

export default App;
