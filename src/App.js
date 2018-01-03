import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './layout/components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main role="main" class="container">
        <div>
          <h1>Hello</h1>
        </div>
        </main>
      </div>
    );
  }
}

export default App;
