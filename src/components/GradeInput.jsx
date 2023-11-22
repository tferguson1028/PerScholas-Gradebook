import React, {useEffect} from 'react'
import "../InputStyle.css";

function GradeInput( { studentNameRef, assignmentNameRef, assignmentGradeRef } ) 
{
  return (
    <div className='GradeInput'>
      <div className='input'>
        <label htmlFor="studentInput">Student Name</label>
        <input id="studentInput" name="studentInput" type="text" ref={studentNameRef} placeholder="e.g. Micheal" defaultValue={""} />
      </div>
      <div className='input'>
        <label htmlFor="studentInput">Assignment Name</label>
        <input id="assignmentName" name="assignmentName" type="text" ref={assignmentNameRef} placeholder="e.g. Homework 1011" defaultValue={""} />
      </div>
      <div className='input'>
        <label htmlFor="gradeValue">Grade Percentage</label>
        <input id="gradeValue" name="gradeValue" type="number" ref={assignmentGradeRef} placeholder="e.g. 88" defaultValue={""} min={0} max={100}/>
      </div>
    </div>
  )
}

export default GradeInput
