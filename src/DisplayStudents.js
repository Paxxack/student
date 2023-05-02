import React, { useState } from "react";

export default function DisplayStudents({
  company,
  skill,
  id,
  firstName,
  lastName,
  email,
  pic,
  grades,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

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

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function submitTag(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      setTags((prevTags) => [...prevTags, event.target.value]);
      setInputValue("");
    }
  }

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
            value={inputValue}
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
