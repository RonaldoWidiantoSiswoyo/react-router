import React from "react";
import MainLayout from "./MainLayout";

class About extends React.Component {
  render() {
    return (
      <MainLayout>
        <div style={container}>
          <h1>About</h1>
          <p>
            What is Lorem Ipsum in English? In layman's terms, Lorem Ipsum is a
            dummy or placeholder text. It's often used in laying out print,
            infographics, or web design. The primary purpose of Lorem Ipsum is
            to create text that does not distract from the overall layout and
            visual hierarchy
          </p>
        </div>
      </MainLayout>
    );
  }
}

export default About;

const container = {
  padding: "0 6rem",
};
