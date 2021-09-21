import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <Navbar title="TextUtils" />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading="Enter your text here" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
