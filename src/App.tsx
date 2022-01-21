import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Login from "./components/Signin/login";
import ForgotPassword from './components/Signin/forgotpassword';
import TuitionManagement from './components/Tuition/tuitionmanagement';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/tuitionManagement" element={<TuitionManagement/>}/>
      </Route>
        

    </div>
    </BrowserRouter>
  );
}

export default App;
