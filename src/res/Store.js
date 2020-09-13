import React, { useState } from "react";

const initialState = {
  theme: "LIGHT",
  fontColor: "#1c1c1c",
  color1: "#565387",
  color2: "#3498db",
};

export const Context = React.createContext();

const Store = ({ children }) => {
  const [state, setState] = useState(initialState);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default Store;
