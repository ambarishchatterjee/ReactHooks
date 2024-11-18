import React, { useReducer } from "react";

const inputReducer = (state, action) => {
  if (action.type === "input") {
    return {
      ...state,
      input: action.payload
    };
  }
  else if (action.type === "submit") {
    return {
      ...state,
      submit: action.payload
    };
  } else {
    return state;
  }
};
export default function Inputs() {
  const initialState = {
    input: "Ambarish",
    submit: "",
  };
  const [state, dispatch] = useReducer(inputReducer, initialState);

  const handleInput = (e) => {
    dispatch({ type: "input", payload: e.target.value });
  };

  const Submit = () => {
    dispatch({ type: "submit", payload: state.input });
  };

  return (
    <>
      <input type="text"  onChange={handleInput} />
      <button onClick={Submit}>submit</button>
      <p>{state.submit}</p>
    </>
  );
}