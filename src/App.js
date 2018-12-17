import React, { Component } from 'react';
import Header from './header.js';
import MainContent from './main-content.js'
import Footer from './footer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
      <Header />
      <MainContent />
      <Footer />
      </div>
    );
  }
}

export default App;
