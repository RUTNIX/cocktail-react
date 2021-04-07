import React, {useEffect, useState} from 'react'
import Search from '../Seacrh'
import Output from '../Output'
import { GET_ALL_COCKTAILS, GET_COCKTAILS_BY_NAME } from '../../config'

export default function Home() {

    const [cocktails, setCocktails] = useState()
    const [val, setVal]=useState('')

    useEffect(()=>{
        getAllCocktails()
    },[])

    const getAllCocktails = async()=>{
        const req = await fetch(GET_ALL_COCKTAILS)
        const res = await req.json()
        setCocktails(res.drinks)
    }

    const getSearch =async(e)=>{
        e.preventDefault()

        const req = await fetch(GET_COCKTAILS_BY_NAME + val)
        const res = await req.json()
        setCocktails(res.drinks)
        setVal('')
    }


    return (
        <div className='home'>
            <Search
                name={val}
                changeName={setVal}
                send={getSearch}
            />

            <Output
                cocktails={cocktails}
                
            />
        </div>
    )
}
