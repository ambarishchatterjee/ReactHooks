import React, { useEffect, useState } from 'react'
import NoteContext from './context'
import { useReducer } from 'react'

export default function Parent(props) {
    const [products, setproducts] = useState()
    

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

    // Question: If I want to send multiple states?
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setproducts(data.products));
    }, [])
    return (
        <>
            <NoteContext.Provider value={[{countState: state, CountDispatch: dispatch}]}>{props.children}</NoteContext.Provider>

        </>
    )
}
