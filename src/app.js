import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Figaro",
  //     animal: "cat",
  //     breed: "tuxedo"
  //   }),
  //   React.createElement(Pet, { name: "Frida", animal: "cat", breed: "calico" }),
  //   React.createElement(Pet, {
  //     name: "Remi",
  //     animal: "dog",
  //     breed: "german sheppard"
  //   })
  // ]);
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Figaro" animal="cat" breed="tuxedo" />
      <Pet name="Frida" animal="cat" breed="calico" />
      <Pet name="Remi" animal="dog" breed="german shepherd" />
    </div>
  );
};

render(<App />, document.querySelector("#root"));
