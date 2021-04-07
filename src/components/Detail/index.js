import React from 'react'
import { Link } from 'react-router-dom'
import { GET_DETAIL_BY_ID } from '../../config'
import './Detail.css'

export default function Detail(props) {

    const [cocktail, setCocktail] = React.useState()

    React.useEffect(()=>{
      let id = props?.match.params.id
      getDetail(id)
    },[])

    const getDetail = async (id)=>{
        const req = await fetch(GET_DETAIL_BY_ID+id)
        const res = await req.json()
        setCocktail(res.drinks[0])
        console.log(res.drinks)
    }

    return (
        <div className='detail_card'>
          <h5 className='detail_name'>{cocktail?.strDrink}</h5>
          <img className='detail_img' src = {cocktail?.strDrinkThumb}/>
          <h5 className='detail_glass'> Glass: {cocktail?.strGlass}</h5>
          <p className='detail_inst'>Instruction: {cocktail?.strInstructions}</p>

          <Link to={'/Ingredient/' + cocktail?.strIngredient1} key={cocktail?.strIngredient1}>
            <p>Ingredient 1: {cocktail?.strIngredient1}</p>
          </Link>

          <Link to={'/Ingredient/' + cocktail?.strIngredient2} key={cocktail?.strIngredient2}>
          <p>Ingredient 2: {cocktail?.strIngredient2}</p>
          </Link>

          <Link to={'/Ingredient/' + cocktail?.strIngredient3} key={cocktail?.strIngredient3}>
          <p>Ingredient 3: {cocktail?.strIngredient3}</p>
          </Link>

        </div>
    )
}
