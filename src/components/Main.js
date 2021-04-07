import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'
import Header from './Header'
import Footer from './Footer'
import Ingredient from './Ingredient'
export default function Main() {
    return (
        <BrowserRouter>
            <Header/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/Detail/:id' exact component={Detail}/>
                    <Route path='/Ingredient/:id' exact component={Ingredient}/>
                </Switch>
            <Footer/> 
        </BrowserRouter>
        
    )
}
