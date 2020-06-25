import React from 'react';
import Routes from "./components/Routes";
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  console.log("why is this not working?")
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
