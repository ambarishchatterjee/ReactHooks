import React, { useState } from 'react'
const initialList = JSON.parse(localStorage.getItem("bucketlist"))

const ItemList = ({ items, onCheck, onDelete }) => {
    return (
        <ul className='pl-5 space-y-3 text-slate-400'>
            {items.map((item) => {
                return (
                    <div className='flex gap-3 items-center'>
                        <li key={item.id} className='text-purple-950 font-medium flex-1'>
                            <input className='m-2 ' type='checkbox' checked={item.seen} onChange={e => {
                                onCheck(
                                    item.id,
                                    e.target.checked
                                );
                            }} />
                            {item.title}
                        </li>
                        <button className='bg-cyan-500 hover:bg-cyan-600 p-2 border-slate-200 border-2 text-neutral-800 flex-1' onClick={() => { onDelete(item.id) }}>Delete</button>
                    </div>
                )
            })}
        </ul >
    )
}

export default function BucketList() {
    const [listitems, setListitems] = useState(initialList)
    const [input, setInput] = useState()
    const [length, setLength] = useState(listitems.length)
    
    const handleToggle = (itemId, newcheck) => {
        setListitems((listitems.map((item) => {
            if (item.id === itemId) {
                return { ...item, seen: newcheck }
            } else {
                return { ...item }
            }
        })))
        
    }
    const addToList = () => {
        setLength(()=>length+1)
        setListitems([
            ...listitems,
            { id: length, title: input, seen: false }
        ])
        localStorage.setItem("bucketlist", JSON.stringify(listitems))
        console.log(listitems)
        setInput('')
    }
    const handledelete = (itemId) => {
        
        setListitems(listitems.filter(list => list.id !== itemId))
        
    }
    return (
        <div className='container text-neutral-800 max-w-fit'>
            <h2 className='text-4xl text-lime-900 font-bold p-3'>Bucket List</h2>
            <ItemList items={listitems} onCheck={handleToggle} onDelete={handledelete} />
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} className='border-zinc-200 border-2 p-2 mt-4 ml-5' />
            <button className='bg-cyan-500 hover:bg-cyan-600 p-2 border-slate-200 border-2 placeholder-slate-700 ml-1' placeholder="Enter Bucketlist" onClick={addToList}>Add to list</button>
        </div>
    )
}
