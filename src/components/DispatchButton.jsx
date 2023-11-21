import React from 'react'

function DispatchButton({ name, icon, getGrade, action, dispatchEvent }) {
  return (
    <button onClick={() => { dispatchEvent({ type: action, payload: { value: getGrade() }}); }}>
      <img className="buttonIcon" src={icon} alt="icon" />
      {name}
    </button>
  )
}

export default DispatchButton
