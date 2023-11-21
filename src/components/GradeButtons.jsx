import React from 'react'

function GradeButtons({ getGrade, actions, dispatchEvent }) {
  return (
    <div id='GradeButtons'>
      <button onClick={() => { dispatchEvent({ type: actions.ADD_GRADE, payload: { value: getGrade() }}); }}>Add Grade</button>
      <button onClick={() => { dispatchEvent({ type: actions.REMOVE_GRADE, payload: { value: getGrade() }}); }}>Remove Grade</button>
      <button onClick={() => { dispatchEvent({ type: actions.SET_GRADE, payload: { value: getGrade() }}); }}>Update Grade</button>
    </div>
  )
}

export default GradeButtons
