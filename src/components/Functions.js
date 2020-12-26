import React from 'react'
import {Link } from 'react-router-dom'


const Functions = () => (
    <div>
        <ul>
            <li><Link to='/funkcje/znajdz'>Znajdź przepis</Link></li>
            <li><Link to='/funkcje/jak'>Jak ugotować</Link></li>
        </ul>
    </div>
)

export default Functions