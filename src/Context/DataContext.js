import React, { createContext, useState } from "react";

export const WorkContext = createContext();
const workID = 0;

export const WorkProvider = ({ children }) => {
  const [SelectedWork, setSelectedWork] = useState(workID);

  return (
    <WorkContext.Provider
      value={{ SelectedWork, setSelectedWork }}>
      {children}
    </WorkContext.Provider>
  );
};

