import React, {useEffect, useReducer, useRef, useState} from "react";
import GradesList from "./components/GradesList";
import GradeInput from "./components/GradeInput";
import GradeButtons from "./components/GradeButtons";
import grades from "./models/grades";
import {act} from "react-dom/test-utils";
import Credits from "./components/Credits";

const GRADE_ACTIONS = {
  ADD_GRADE: 0,
  REMOVE_GRADE: 1,
  SET_GRADE: 2
}

function gradeListReducer(state, action)
{
  console.log(state);
  let index = state.findIndex((el) => {
    let value = action.payload.value;
    return ( 
      el.name === value.name && 
      el.assignment === value.assignment
    )
  });
  
  if(index > -1 && action.type === GRADE_ACTIONS.ADD_GRADE)
    action.type = GRADE_ACTIONS.SET_GRADE;
    
  console.log(index);
  switch(action.type)
  {
    case GRADE_ACTIONS.ADD_GRADE:
      return [...state, action.payload.value];
    
    case GRADE_ACTIONS.REMOVE_GRADE:
      return index > -1 ? [...(state.splice(index, 1))] : [...state];
    
    case GRADE_ACTIONS.SET_GRADE:
      return index > -1 ? [...(state.splice(index, 1)), action.payload.value] : [...state];
  }
}

function App() {
  const studentNameRef = useRef("");
  const assignmentNameRef = useRef("");
  const assignmentGradeRef = useRef(100);
  
  const [gradeList, gradeListDispatch] = useReducer(gradeListReducer, grades);
  
  const [currentGradeInput, setCurrentGradeInput] = useState(makeGradeItem());
    
  function makeGradeItem()
  {    
    let obj = 
    {
      name: studentNameRef.current.value,
      assignment: assignmentNameRef.current.value,
      grade: assignmentGradeRef.current.value
    };
    
    console.log(obj)
    return obj;
  }
  
  return (
    <div className="App">
      <GradesList grades={gradeList}/>
      <GradeInput 
        studentNameRef={studentNameRef}
        assignmentNameRef={assignmentNameRef}
        assignmentGradeRef={assignmentGradeRef}
      />
      <GradeButtons 
        getGrade={makeGradeItem}
        actions={GRADE_ACTIONS}
        dispatchEvent={gradeListDispatch}
      />
      
      <Credits />
    </div>
  );
}

export default App;
