import React, { useState } from "react";
import useHandleChange from "../customHooks/useHandleChange";

export default function DisplayStudents({ student }) {
  const { company, skill, id, firstName, lastName, email, pic, grades, tags } =
    student;
  const [isVisible, setIsVisible] = useState(false);
  const [searchValue, handleChange] = useHandleChange();

  /* Function show all student's results on button clicked*/

  function getTestResults(testResults) {
    const allResults = testResults?.map((result, id) => {
      return <p key={id}>{`Test ${id}: ${"\u00A0"} ${result}%`}</p>;
    });
    return allResults;
  }

  /* Function calculate scores the for average score*/

  function getAverageScore(studentGrades) {
    let totalScore = 0;
    for (let i = 0; i < studentGrades.length; i++) {
      totalScore += parseInt(studentGrades[i]);
    }
    const averageScore = totalScore / studentGrades.length;
    return averageScore.toFixed(2);
  }

  /* Render tags if the tags array is not empty*/

  const renderTags = tags?.map((tag, i) => {
    if (tag != []) {
      return (
        <div key={i + 100}>
          <p className="tagStyle">{tag}</p>
        </div>
      );
    }
  });

  /* Function push tags to tag's array and reset tag input value*/

  function submitTag(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      tags.push(event.target.value);
      handleChange(event);
    }
  }

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
                    value={searchValue.value}
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
