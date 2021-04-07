import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from './img/logo.png'
export default function Header() {
    return (
        <header>
            <Link to='/'><img src={logo} />  </Link>
        </header>
    )
}
