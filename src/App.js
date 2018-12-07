import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './components/Items';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="mainContainer">
          <aside>
            <List />
          </aside>
          <div className="buttonsContainer">
            <Items />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
