import React, {useState, useEffect} from 'react'
import {getVegetables} from '../../Api'
import {Link} from "react-router-dom";
import How from "../How";

const FullVege = () => {
    const [vegetables, setVegetables] = useState([]);

    useEffect(() => {
        setVegetables(getVegetables());
    }, [])

    return (
        <>
            <How/>
            <ul>
                {vegetables.map((data, index) => (<Link key={index} to={"/funkcje/jak/warzywa/" + data.number}>
                    <li>{data.name}</li>
                </Link>))}
            </ul>
        </>
    )
}

export default FullVege