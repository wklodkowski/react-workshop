import React, { Component } from 'react';
import './layout/styles/blog.css';
import './layout/styles/bootstrap.min.css';
import './layout/styles/icons/favicon.ico';
import Header from './layout/components/Header';
import Home from './pages/home';
import Footer from './layout/components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
