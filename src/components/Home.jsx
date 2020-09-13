import React, { useContext } from "react";
import Store, { Context } from "../res/Store";
import Logo from "./../res/Logo";

const Home = () => {
  const [state, setState] = useContext(Context);

  return (
    <>
      <h1>Home </h1>
      <Logo />
    </>
  );
};
export default Home;
