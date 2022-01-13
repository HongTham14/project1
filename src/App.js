import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from "./components/login.component";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Login/>
    </div>
    </BrowserRouter>
  );
}

export default App;
