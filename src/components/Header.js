import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Wprowadzenie</Link></li>
                <li><Link to='/funkcje'>Funkcje</Link></li>
                <li><Link to='/inne'>Inne</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header