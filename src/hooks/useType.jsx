import React, { createContext, useContext, useState } from "react";

const TypeContext = createContext();

export const TypeProvider = ({ children }) => {
  const [type, setType] = useState("");

  return (
    <TypeContext.Provider value={{ type, setType }}>
      {children}
    </TypeContext.Provider>
  );
};

export const useType = () => {
  return useContext(TypeContext);
};
