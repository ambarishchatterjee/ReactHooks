import React, { useReducer } from 'react'

export default function NameSubmit() {
    const nameReducer = (state, action) => {
        if(action.type === "Input"){
            return{
                ...state,
                name: action.payload
            }
        }
        else if(action.type === "Submit"){
            return{
                ...state,
                submit: action.payload
            }
        }
        else{
            return state
        }
    }
    const initialState = {
        name: "",
        submit: ""
    }
    const [state, dispatch] = useReducer(nameReducer, initialState)
    const handleSubmit = ()=>{
        dispatch({type: "Submit", payload: state.name})
    }
    const handleChange = (e)=>{
        dispatch({type: "Input", payload: e.target.value})
    }
  return (
    <>
    <input type='text' value={state.name} onChange={handleChange} />
    <button onClick={handleSubmit}>Submit</button>
      {
        state.submit
      }
    </>
  )
}
