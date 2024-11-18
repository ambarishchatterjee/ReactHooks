import React, { useState } from 'react'

export default function Incre() {
    const [count, setCount] = useState(0)


    const increment = () => {
        count < 10 ? setCount(count + 1) : alert("Max 10")
    }
    const dicreament = () => {
        count > 0 ? setCount(count - 1) : alert("Min 0")
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={dicreament}>dicreament</button>
        </div>
    )
}
