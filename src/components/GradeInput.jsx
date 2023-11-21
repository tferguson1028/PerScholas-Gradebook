import React, {useEffect} from 'react'

function GradeInput( { studentNameRef, assignmentNameRef, assignmentGradeRef } ) 
{
  return (
    <div id='GradeInput'> 
      <input 
        type="text" 
        name="studentInput"
        id="studentInput" 
        ref={studentNameRef} 
        placeholder="Student Name" 
        defaultValue={""}
      />
      <input type="text" name="assignmentName" id="assignmentName" ref={assignmentNameRef} placeholder="Assignment Name" defaultValue={""}/>
      <input type="number" name="gradeValue" id="gradeValue" ref={assignmentGradeRef} placeholder="Grade" defaultValue={""}/>
    </div>
  )
}

export default GradeInput
