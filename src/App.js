import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <nav className="d-flex nav">
      <div className="logo">logo</div>
      <div className="d-flex-column title" style={{color:"white", background:"black"}}>
      <h1 className="ml-auto mr-auto">Intro to Netlify</h1>
      <span className=""><em>...happy</em></span>
      </div>
      <div className="bars">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </nav>
    </div>
  );
}

export default App;
