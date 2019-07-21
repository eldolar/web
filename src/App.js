import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BankList from './containers/BankListContainer';
import Footer from './components/Footer'
import Navbar from './containers/NavbarContainer'

import './App.scss';

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />

      <Footer />
    </Router>
  );
}

function Home() {
  return (
    <div className="content">
      <BankList />
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default App;
