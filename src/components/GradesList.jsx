import React from 'react'
import AssignmentItem from './AssignmentItem'
import "../GradeListStyle.css"

function GradesList({ grades }) {
  return (
    <div className='GradeList'>
      <header className='GradeListHead'>
        <span>Name</span>
        <span>Assignment</span>
        <span>Percentage</span>
        <span>Grade</span>
      </header>
      { grades.map((gradeInfo) => <AssignmentItem key={`${gradeInfo.name}-${gradeInfo.assignment}`} gradeInfo={gradeInfo} />) }
    </div>
  )
}

export default GradesList
