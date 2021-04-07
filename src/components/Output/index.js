import React from 'react'
import { Link } from 'react-router-dom'
import './Output.css'

export default function Output({cocktails}) {
    return (
        <div className='cards'>
            {
                cocktails && cocktails.map((el)=>{
                    return(
                        <div className='card'>
                        <Link to={'/detail/' + el.idDrink} key={el.idDrink}>  
                            <img className='cocktailImg' src={el.strDrinkThumb} alt={el.strDrink}/>
                            <h5 className='cocktailName' >{el.strDrink}</h5>
                        </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
