import React from 'react'
import Api from '../Api'
import { Link } from 'react-router-dom'


const Vegeta = (props) => {
    const vegeta = Api.get(
        parseInt(props.match.params.number, 10)
    )
    if (!vegeta) {
        return <div>Przepraszam...</div>
    }
    return (
        <div>
            <h1>{vegeta.name} (#{vegeta.number})</h1>
            <h2>Position: {vegeta.position}</h2>
            <Link to='/funkcje/jak/warzywa'>Wróć</Link>
        </div>
    )
}

export default Vegeta