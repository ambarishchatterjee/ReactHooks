import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProductList() {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => setData(data.users))
    }, [])
    return (
        <>
        <h1>User List</h1>
        <hr></hr>
        <ol>
            {data?.map((user) => {
                return (
                    <>

                        <li><Link to={`/users/${user.id}`}><h5 key={user.id}>{user.firstName}</h5></Link></li>

                    </>
                )
            })}
</ol>
        </>
    )
}
