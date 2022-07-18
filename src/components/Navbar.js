import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={nav}>
      <h1>Ronaldo's Web</h1>
      <ul style={myUl}>
        <Link style={link} to="/">
          Home
        </Link>{" "}
        | {""}
        <Link style={link} to="/about">
          About
        </Link>
        <Link style={link} to="/contact">
          Contact
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;

const nav = {
  display: "flex",
  background: "#fe024e",
  padding: "0 6rem",
  justifyContent: "space-between",
  color: "#fff",
  alignItems: "center",
};
const link = {
  color: "#fff",
  textDecoration: "none",
};
const myUl = {
  display: "flex",
  listStyle: "none",
  justifyContent: "space-between",
  width: "20%",
};
