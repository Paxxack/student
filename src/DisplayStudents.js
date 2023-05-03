import React, { useState, useContext } from "react";
import useHandleChange from "./useHandleChange";

export default function DisplayStudents({
  company,
  skill,
  id,
  firstName,
  lastName,
  email,
  pic,
  grades,
  tags,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [value, handleChange] = useHandleChange();

  function getTestResults(testResults) {
    const allResults = testResults?.map((result, id) => {
      return <li key={id}>{`Test ${id}: ${result}%`}</li>;
    });
    return <ul>{allResults}</ul>;
  }

  function getAverageScore(studentGrades) {
    let totalScore = 0;
    for (let i = 0; i < studentGrades.length; i++) {
      totalScore += parseInt(studentGrades[i]);
    }
    const averageScore = totalScore / studentGrades.length;
    return averageScore.toFixed(2);
  }

  const renderTags = tags?.map((Tag, i) => {
    return <h2 key={i + 100}>{Tag}</h2>;
  });

  function submitTag(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      tags.push(event.target.value);
      handleChange(event);
    }
  }
  console.log();
  return (
    <div key={id} className="student-layout">
      <div className="student">
        <div className="student-picture">
          <img src={pic} className="portrait" alt="student-portrait" />
        </div>
        <div className="student-info">
          <h1>{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</h1>
          <p>Email: {email}</p>
          <p>Company: {company}</p>
          <p>Skill: {skill}</p>
          <p>{`Average: ${getAverageScore(grades)}%`}</p>
          {isVisible && <div>{getTestResults(grades)}</div>}
        </div>
        {renderTags}
        <form>
          <input
            className="inputStyle"
            value={value.value}
            name="value"
            type="text"
            placeholder="Add a here"
            onChange={handleChange}
            onKeyDown={submitTag}
          />
        </form>
      </div>
      <div>
        <button
          className="add"
          onClick={() => setIsVisible((prevState) => !prevState)}
        >
          +
        </button>
      </div>
    </div>
  );
}
