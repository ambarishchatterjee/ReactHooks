import React, { useState } from 'react'

export default function ColorPicker() {
    const [color, setColor] = useState("red")

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
    const handleChange = (e) => {
        setColor(e.target.value)
    }

    return (
        <>
            <select onChange={handleChange}>
                {colors.map((item) => {
                    return(
                    <>
                        <option value={item.lebel}>
                            {item.lebel}
                        </option>
                    </>
                    )
                })}

            </select>
            <div className='App-logo' style={{backgroundColor: color, width: "100px"}}>

            </div>
                
        </>
    )
}
