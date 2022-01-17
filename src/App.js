import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
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
        <Login/>  
       {/* <ForgotPassword/>  */}
      {/* <TuitionManagement/> */}

    </div>
    </BrowserRouter>
  );
}

export default App;
