import React from "react";

const Footer = () => {
  return (
    <div style={footer}>
      <h1>Ohh My Footer</h1>
    </div>
  );
};
export default Footer;

const footer = {
  display: "flex",
  background: "#fe024e",
  justifyContent: "center",
  color: "#fff",
  alignItems: "center",
  position: "absolute",
  width: "100%",
  bottom: "0",
};
