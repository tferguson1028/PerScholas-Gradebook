import React from 'react'

function AssignmentItem({ gradeInfo }) {
  let letterGrade =
    gradeInfo.grade > 100 ? "A+" :
    gradeInfo.grade >= 90 ? "A" :
    gradeInfo.grade >= 80 ? "B" :
    gradeInfo.grade >= 70 ? "C" :
    gradeInfo.grade >= 60 ? "D" : "F";
  
  let gradeColor =
    gradeInfo.grade >= 70 ? "#000000" :
    gradeInfo.grade >= 60 ? "#ff5c0a" : "#f20d0d";
  
  let weight = gradeInfo.grade < 70 ? "bold" : "normal";
  return (
    <div className='AssignmentItem'>
      <span>{gradeInfo.name}</span>
      <span>{gradeInfo.assignment}</span>
      <span style={{color: gradeColor, fontWeight: weight}}>{gradeInfo.grade}%</span>
      <span style={{color: gradeColor, fontWeight: weight}}>{letterGrade}</span>
    </div>
  )
}

export default AssignmentItem
