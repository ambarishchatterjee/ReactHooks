import React, { useReducer } from 'react'

export default function Colorpicker() {
    const colors = [
        {
            lebel: "red"
        },
        {
            lebel: "green"
        },
        {
            lebel: "yellow"
        },
        {
            lebel: "purple"
        }
        ,
        {
            lebel: "pink"
        },
        {
            lebel: "orange"
        }
    ]
    const colorpickerReducer = (state, action) => {
        if (action.type === "color") {
            return {
                color: action.color
            }
        } else {
            return state
        }

    }
    const initialState = {
        color: "red"
    }

    const [state, dispatch] = useReducer(colorpickerReducer, initialState)
    const handleChange = (e) => {
        const updatedColor = e.target.value
        dispatch({ type: "color", color: updatedColor })
    }
    return (
        <>
            <select onChange={handleChange}>
                {colors.map((item) => {
                    return (
                        <>
                            <option value={item.lebel}>
                                {item.lebel}
                            </option>
                        </>
                    )
                })}
            </select>
            <div style={{ backgroundColor: state.color, width: "100px", height: "100px" }}>

            </div>
        </>
    )
}
