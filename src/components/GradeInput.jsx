import React, {useEffect} from 'react'

function GradeInput( { studentNameRef, assignmentNameRef, assignmentGradeRef } ) 
{
  return (
    <div id='GradeInput'>
      <div className='input'>
        <label htmlFor="studentInput">Student</label>
        <input id="studentInput" name="studentInput" type="text" ref={studentNameRef} placeholder="Student Name" defaultValue={""} />
      </div>
      <div className='input'>
        <label htmlFor="studentInput">Assignment</label>
        <input id="assignmentName" name="assignmentName" type="text" ref={assignmentNameRef} placeholder="Assignment Name" defaultValue={""} />
      </div>
      <div className='input'>
        <label htmlFor="gradeValue">Grade Percentage</label>
        <input id="gradeValue" name="gradeValue" type="number" ref={assignmentGradeRef} placeholder="Grade" defaultValue={""} />
      </div>
    </div>
  )
}

export default GradeInput
