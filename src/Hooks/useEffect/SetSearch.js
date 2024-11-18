import React, { useEffect, useState } from 'react'

export default function SetSearch() {
    const [Input, setInput] = useState("")
    const [Output, setOutput] = useState([])
    const [search, setSearch] = useState()


    const handleChange = (e) => {
        e.preventDefault();
        setSearch(Input);
    }
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                setOutput(data.products)
            })
    }, [])
    useEffect(() => {
        if (search) {
            fetch(`https://dummyjson.com/products/search?q=${search}`)
                .then((response) => response.json())
                .then((data) => {
                    setOutput(data.products)
                })
        }

    }, [search])

    return (
        <>
            <form onSubmit={handleChange}>
                <input type='text' onChange={(e) => setInput(e.target.value)} />
                <button >Search</button>
            </form>
            {Output.map((product) => (
                <div>{product.title}</div>
            ))}
        </>
    )
}
