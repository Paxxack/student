import "./App.css";
import React, { useContext } from "react";
import DisplayStudents from "./DisplayStudents";
import { Context } from "./Context";
import useHandleChange from "./useHandleChange";

function App() {
  const { dataStudents } = useContext(Context);
  const [value, handleChange] = useHandleChange();

  const displayStudent = dataStudents?.map((student) => {
    const {
      company,
      skill,
      id,
      firstName,
      lastName,
      email,
      pic,
      grades,
      tags,
    } = student;

    const studentProperties = (
      <DisplayStudents
        firstName={firstName}
        lastName={lastName}
        pic={pic}
        email={email}
        skill={skill}
        company={company}
        id={id}
        grades={grades}
        tags={tags}
        key={id}
      />
    );

    if (value === "") {
      return studentProperties;
    } else if (checkSearchInputs(student)) {
      return studentProperties;
    }
    return "";
  });

  function checkSearchInputs(student) {
    return (
      (student.firstName.toUpperCase().includes(value.name.toUpperCase()) ||
        student.lastName.toUpperCase().includes(value.name.toUpperCase())) &&
      student.tags.some((tag) =>
        tag.toUpperCase().includes(value.tag.toUpperCase())
      )
    );
  }

  return (
    <div className="background">
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
        <div id="container">{displayStudent}</div>
      </div>
    </div>
  );
}

export default App;
