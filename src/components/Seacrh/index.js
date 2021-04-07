import React from 'react'
import  './Seach.css'

export default function Search({name, changeName, send} ) {
    return (
        <>
        <form onSubmit={send}>
            <input
                className='search-input'
                placeholder='search by name'
                value={name}
                onChange={(e)=>changeName(e.target.value)}
            />
        </form>
        </>
    )
}
