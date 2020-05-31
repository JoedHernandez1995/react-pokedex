import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/layout/Navbar"
import Dashboard from "./components/layout/Dashboard"

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <Dashboard></Dashboard>
        </div>
    </div>
  );
}

export default App;
