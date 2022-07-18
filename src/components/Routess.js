import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class Routess extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </React.Fragment>
    );
  }
}
export default Routess;
