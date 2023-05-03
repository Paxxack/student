import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [dataStudents, setDataStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    const response = await fetch(
      "https://api.hatchways.io/assessment/students"
    );
    const data = await response.json();
    const newDataArr = data.students?.map((eachStudent) => {
      return { ...eachStudent, tags: [""] };
    });
    setDataStudents(newDataArr);
  }

  return (
    <Context.Provider value={{ dataStudents, setDataStudents }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
