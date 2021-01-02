import React from 'react'
import ApiVeg from '../../Api'
import { Link } from 'react-router-dom'


const FullVege = () => (
    <div>
        <ul>
            {
                ApiVeg.all().map(v => (
                    <li key={v.number}>
                        <Link to={`/funkcje/jak/warzywa/${v.number}`}>{v.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default FullVege