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
    console.log(checkSearchInputs(student));
    // console.log([`${firstName} ${lastName}`]);
    // console.log(checkSearchInputs([`${firstName} ${lastName}`]));
    // console.log(tags);
    // console.log(checkSearchInputs(tags));
    console.log(student.firstName.toUpperCase());
    console.log(value);
    if (value === "") {
      return studentProperties;
    } else if (
      // checkSearchInputs([`${firstName} ${lastName}`]) ||
      // checkSearchInputs(tags)
      checkSearchInputs(student)
      // &&
      // checkSearchInputs(tags)
      // checkSearchInputs([{ firstName }, { lastName }]) ||
      // checkSearchInputs(tags)
    ) {
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

  // const nameMatch = inputArr
  //   .toUpperCase()
  //   .every()
  //   .includes(value.name.toUpperCase());
  // const tagMatch = inputArr
  //   .toUpperCase()
  //   .every(() => .includes(value.tag.toUpperCase()))

  // function checkSearchInputs(input) {
  //   const nameMatch = input.toUpperCase().includes(value.name.toUpperCase());
  //   const tagMatch = input.toUpperCase().includes(value.tag.toUpperCase());
  //   return nameMatch || tagMatch;
  // }

  //console.log(value);
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
