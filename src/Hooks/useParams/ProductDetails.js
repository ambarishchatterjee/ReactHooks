import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ProductDetails() {
    const [data, setData] = useState()
    let {id} = useParams()
    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
  return (
    <>
      <Link to="/"><button>Back to users</button></Link>
      <h1>{data?.firstName} {data?.lastName}</h1>
    </>
  )
}
