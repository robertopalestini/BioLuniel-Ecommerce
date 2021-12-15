import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Contact from "./Contact";
import Aboutus from "./Aboutus";
import Products from "./Products";
import Footer from "./Footer";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';



function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/login">
          <Login />
          </Route>
      <Route path="/Checkout">
      <Header />
        <Checkout />
      </Route>

      <Route path="/AboutUs">
      <Header />
        <Aboutus />
      </Route>

      <Route path="/Products">
      <Header />
        <Products />
      </Route>

      <Route path="/Contact">
      <Header />
        <Contact />
      </Route>


      <Route path="/">
      <Header />
        <Home />
        <Footer />
        </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
