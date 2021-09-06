import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Forgot from './pages/Forgot';
import Search from './pages/Search';
import Results from './pages/Results';
import About from './pages/About';
import Main from './pages/Main';


ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);