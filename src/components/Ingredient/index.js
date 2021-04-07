import React from 'react'
import './ingred.css'

export default function Ingredient(props) {
    const [ingredients, setIngredients] = React.useState()

    React.useEffect(()=>{
      let name = props?.match.params.id;
      getIngred(name);
    },[])

    const getIngred = async (name)=>{
        const req = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' +name)
        const res = await req.json()
        setIngredients(res.ingredients[0])
    }

    return (
      <div className='ingredients'>
        <div className='card_ingred'>
          <h2>About Ingredient</h2>
          <p>Type:{ingredients?.strType}</p>
          <h5>{ingredients?.strIngredient}</h5>
          <h5>{ingredients?.strABV}</h5>
          <p>{ingredients?.strDescription}</p>
        </div>
      </div>
    )
}
