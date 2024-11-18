import React, { useContext } from 'react'
import NoteContext from './context'

export default function Child() {
  const data = useContext(NoteContext)
  console.log(data)
  return (
    <>
    {data?.map((item)=>{
      return(
        
          <>
          {item.countState.count}
          <button onClick={()=>{item.CountDispatch({type: 'Increament' })}}>Count +</button>
          </>
        
      )
    })}

    
      {/* <h1>Product list</h1>
      <hr></hr>
      <ol>
        {data?.map((item) => {
          return (
            <>

              <li>{item.title}</li>

            </>
          )
        })}
      </ol> */}
    </>
  )
}
