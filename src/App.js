import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import BankList from "./containers/BankListContainer";
import Navbar from "./containers/NavbarContainer";
import Footer from "./components/Footer";

import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter basename="/web">
      <header>
        <Navbar />
      </header>

      <section className="content">
        <Route exact path="/" component={BankList} />
      </section>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
