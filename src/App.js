import React from "react";
import Header from './components/Header'
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import Home from './components/Home';
import Help from './components/Help';

const App = () => {
  return (
    <div className ='container'>
      <Header />
    </div>
  );
};


export default App;
