import React from 'react'
import Api from '../Api'
import { Link } from 'react-router-dom'


const FullVege = () => (
    <div>
        <ul>
            {
                Api.all().map(p => (
                    <li key={p.number}>
                        <Link to={`/funkcje/jak/warzywa/${p.number}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default FullVege