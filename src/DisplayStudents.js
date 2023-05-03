import React, { useState } from "react";
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
      return <p key={id}>{`Test ${id}: ${"\u00A0"} ${result}%`}</p>;
    });
    return allResults;
  }

  function getAverageScore(studentGrades) {
    let totalScore = 0;
    for (let i = 0; i < studentGrades.length; i++) {
      totalScore += parseInt(studentGrades[i]);
    }
    const averageScore = totalScore / studentGrades.length;
    return averageScore.toFixed(2);
  }

  const renderTags = tags?.map((tag, i) => {
    if (tag != []) {
      return (
        <div>
          <p key={i + 100} className="tagStyle">
            {tag}
          </p>
        </div>
      );
    }
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
    <div>
      <div key={id} className="student-layout">
        <div className="align-info-input">
          <div className="student">
            <div className="student-picture">
              <img src={pic} className="portrait" alt="student-portrait" />
            </div>
            <div>
              <div className="student-info">
                <h1>{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</h1>
                <p>Email: {email}</p>
                <p>Company: {company}</p>
                <p>Skill: {skill}</p>
                <p>{`Average: ${getAverageScore(grades)}%`}</p>
                {isVisible && (
                  <div id="test-result">{getTestResults(grades)}</div>
                )}
                <div className="tagsContainer">{renderTags}</div>
                <form>
                  <input
                    className="inputStyle add-tag"
                    value={value.value}
                    name="value"
                    type="text"
                    placeholder="Add a here"
                    onChange={handleChange}
                    onKeyDown={submitTag}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            className="add"
            onClick={() => setIsVisible((prevState) => !prevState)}
          >
            {isVisible ? "-" : "+"}
          </button>
        </div>
      </div>
      <div id="line"></div>
    </div>
  );
}
