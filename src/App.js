import React from "react";
import Logo from "./res/Logo";

const App = () => {
  return (
    <>
      <Logo
        defaultColor="#007791"
        defaultShadow="#000"
        hoverColor="#000"
        hoverShadow="#00ffff"
      />
      <p>Hello World!</p>
    </>
  );
};

export default App;
