import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import BankList from './containers/BankListContainer';
import Navbar from './containers/NavbarContainer'
import Footer from './components/Footer'
import About from './components/About'

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>

      <section className="content">
        <Route exact path="/" component={BankList} />
        <Route path="/about" component={About} />
      </section>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
