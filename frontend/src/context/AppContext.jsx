// src/context/AppContext.jsx
import { createContext } from "react";
import { trainers } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const value = { trainers };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
