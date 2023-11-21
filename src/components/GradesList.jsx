import React from 'react'
import AssignmentItem from './AssignmentItem'

function GradesList({ grades }) {
  return (
    <div className='GradeList'>
      {
        grades.map((gradeInfo) => <AssignmentItem gradeInfo={gradeInfo} />)
      }
    </div>
  )
}

export default GradesList
