import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
