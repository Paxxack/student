import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [dataStudents, setDataStudents] = useState([]);

  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((data) => setDataStudents(data));
  }, []);

  return (
    <ContextProvider
      value={{
        dataStudents,
      }}
    >
      {children}
    </ContextProvider>
  );
}

export { ContextProvider, Context };
