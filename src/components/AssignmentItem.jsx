import React from 'react'

function AssignmentItem({ gradeInfo }) {
  return (
    <div className='AssignmentItem'>
      <span>{gradeInfo.name}</span>
      <span>{gradeInfo.assignment}</span>
      <span>{gradeInfo.grade}</span>
      <span>
      {
        gradeInfo.grade > 100 ? "A+" :
        gradeInfo.grade >= 90 ? "A" :
        gradeInfo.grade >= 80 ? "B" :
        gradeInfo.grade >= 70 ? "C" :
        gradeInfo.grade >= 60 ? "D" : "F"
      }
      </span>
    </div>
  )
}

export default AssignmentItem
