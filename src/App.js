import React, { Component } from 'react';
import './App.css';
import Router from './router/routes';
class App extends Component {
  render() {
    return (  
      <div>
          <Router/>
      </div>
    );
  }
}
export default App;