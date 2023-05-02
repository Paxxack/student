import "./App.css";
import React, { useState, useContext } from "react";
import DisplayStudents from "./DisplayStudents";
import { Context } from "./Context";

function App() {
  const { dataStudents } = useContext(Context);
  //const [dataStudents, setDataStudents] = useState([]);
  const [searchInput, setSearchInput] = useState({ name: "", tag: "" });

  // useEffect(() => {
  //   fetch("https://api.hatchways.io/assessment/students")
  //     .then((res) => res.json())
  //     .then((data) => setDataStudents(data));
  // }, []);

  const displayStudent = dataStudents.students?.map((student) => {
    const { company, skill, id, firstName, lastName, email, pic, grades } =
      student;
    if (checkSearchName(firstName, lastName)) {
      return (
        <DisplayStudents
          firstName={firstName}
          lastName={lastName}
          pic={pic}
          email={email}
          skill={skill}
          company={company}
          id={id}
          grades={grades}
          key={id}
        />
      );
    }
  });

  function checkSearchName(firstName, lastName = "") {
    const fullName = `${firstName} ${lastName}`;
    const nameMatch = fullName
      .toUpperCase()
      .includes(searchInput.name.toUpperCase());
    return nameMatch;
  }

  function handleChange(event) {
    setSearchInput((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value.trim(),
      };
    });
  }

  //console.log(searchInput);
  return (
    <div className="App">
      <div className="topSearch">
        <input
          className="inputStyle"
          type="text"
          name="name"
          placeholder="Search by name"
          onChange={handleChange}
        />
        <input
          className="inputStyle"
          type="text"
          name="tag"
          placeholder="Search by tag"
          onChange={handleChange}
        />
      </div>

      {displayStudent}
    </div>
  );
}

export default App;

/*
  1- call API
  2- display information from api
  3- Display average score
  4- Plus minus button functionality
  5- Add tag function
  6- Setup search by name
  7- Setup search by tag
*/
