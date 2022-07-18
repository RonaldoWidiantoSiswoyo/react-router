import React from "react";
import MainLayout from "./MainLayout";

class Home extends React.Component {
  state = {
    skills: [
      {
        id: 1,
        name: "Javascript",
        description: "Javascript Description",
        image: require("../image/js.png"),
      },
      {
        id: 2,
        name: "React",
        description: "React Description",
        image: require("../image/react.png"),
      },
      {
        id: 1,
        name: "Vue",
        description: "Vue Description",
        image: require("../image/vue.png"),
      },
      {
        id: 1,
        name: "Svelte",
        description: "Svelte Description",
        image: require("../image/svelte.png"),
      },
    ],
  };
  render() {
    const { skills } = this.state;
    return (
      <MainLayout>
        <h1 style={{ paddingLeft: "6rem" }}>Homepage</h1>
        <div style={container}>
          {skills.map((item) => (
            <div key={item.id} style={card}>
              <img src={item.image} alt={item.name} style={img} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </MainLayout>
    );
  }
}
export default Home;

const container = {
  display: "flex",
  padding: "0 6rem",
  justifyContent: "space-between",
};

const card = {
  width: "20%",
  height: "15rem",
};
const img = {
  width: "100%",
  height: "100%",
};
