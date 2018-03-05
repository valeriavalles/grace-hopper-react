import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap/css/bootstrap.css'
import Main from './stalesComponent' 
import Cont from './Cont'
import Aside from './Aside'



class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <Aside />
        <Cont /> 
      </div>
    );
  }
  
}

export default App;
