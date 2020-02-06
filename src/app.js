import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

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
      <SearchParams />
    </div>
  );
};

render(<App />, document.querySelector("#root"));
