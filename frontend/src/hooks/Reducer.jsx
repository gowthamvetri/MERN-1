import React, { useReducer } from 'react'

// useReducer -> it is the advance stage of useState/ used to handle complex state logic
// many actions on single state
// Syntax
// const [state,dispatch] = useReducer(reducer_Function,initial_State)

function reducer(state,action){
  switch(action.type){
    case "INCREMENT":
      return { count:state.count+1}

    case "DECREMENT":
      return { count:state.count-1}

    case "RESET":
      return {count:0}
    default:
      return state;
  }
}

const initialState = {count:0}

function Reducer() {

  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      <h1>Reducer Example : </h1>
      <h1>Count : {state.count}</h1>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
      <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
    </div>
  )
}

export default Reducer