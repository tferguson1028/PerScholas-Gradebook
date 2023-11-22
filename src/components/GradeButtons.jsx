import React from 'react'
import DispatchButton from './DispatchButton';
import "../ButtonsStyle.css";

function GradeButtons({ getGrade, actions, dispatchEvent }) {
  return (
    <div className='GradeButtons'>
      <DispatchButton name={"Add Grade"} icon={"/assets/add.png"} action={actions.ADD_GRADE} getGrade={getGrade} dispatchEvent={dispatchEvent} />
      <DispatchButton name={"Remove Grade"} icon={"/assets/delete.png"} action={actions.REMOVE_GRADE} getGrade={getGrade} dispatchEvent={dispatchEvent} />
      <DispatchButton name={"Update Grade"} icon={"/assets/replace.png"} action={actions.SET_GRADE} getGrade={getGrade} dispatchEvent={dispatchEvent} />
    </div>
  )
}

export default GradeButtons
