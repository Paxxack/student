import React, { useContext } from "react";
import DisplayStudents from "./Components/DisplayStudents";
import { Context } from "./Context";
import useHandleChange from "./customHooks/useHandleChange";

function App() {
  const { dataStudents } = useContext(Context);
  const [searchValue, handleChange] = useHandleChange();

  /* Check all students data and render them conditional 
     to the search input from user*/

  const displayStudents = dataStudents?.map((student) => {
    if (searchValue === "" || checkSearchInputs(student)) {
      return <DisplayStudents student={student} />;
    }
  });

  /* Function check user search input with data*/

  function checkSearchInputs(student) {
    const fullName = `${student.firstName} ${student.lastName}`;
    return (
      fullName.toUpperCase().includes(searchValue.name.toUpperCase()) &&
      student.tags.some((tag) =>
        tag.toUpperCase().includes(searchValue.tag.toUpperCase())
      )
    );
  }

  return (
    <div className="background">
      <div className="App">
        <div className="topSearch">
          <div>
            <input
              className="inputStyle"
              type="text"
              name="name"
              placeholder="Search by name"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="inputStyle"
              type="text"
              name="tag"
              placeholder="Search by tag"
              onChange={handleChange}
            />
          </div>
        </div>
        <div id="container">{displayStudents}</div>
      </div>
    </div>
  );
}

export default App;
