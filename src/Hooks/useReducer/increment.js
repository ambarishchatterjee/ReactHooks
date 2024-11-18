import React, { useReducer } from 'react'

export default function Increment() {
    const countReducer = (state, action) => {
        if (action.type === "Increament") {
            if (state.count < 10) {
                return {
                    count: state.count + 1
                }
            }
            else {
                return state
            }
        }
        else if (action.type === "Decreament") {
            if (state.count > 0) {
                return {
                    count: state.count - 1
                }
            }
            else {
                return state
            }
        }
        else if (action.type === "Reset") {
            if (state.count > 0) {
                return {
                    count: 0
                }
            }
            else {
                return state
            }
        }
    }
    const initialState = {
        count: 0
    }
    const [state, dispatch] = useReducer(countReducer, initialState)
    return (
        <>
            <div>{state.count}</div>

            <button onClick={() => { dispatch({ type: "Increament" }) }}>Count +</button>
            <button onClick={() => { dispatch({ type: "Decreament" }) }}>Count -</button>
            <button onClick={() => { dispatch({ type: "Reset" }) }}>Reset</button>
        </>
    )
}
