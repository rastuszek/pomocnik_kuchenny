import React, {useState, useEffect} from 'react'
import {getVegetables} from '../../Api'
import {Link} from "react-router-dom";
import How from "../How";

const Vegetables = () => {
    const [vegetables, setVegetables] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let result = await getVegetables();
            setVegetables(result);
        }
        fetchData().then();
    },[])

    console.log(vegetables)

    return (
        <>
            <How/>
            <ul>
                {vegetables && vegetables.map((data, index) => (<Link key={index} to={"/funkcje/jak/warzywa/" + data.number}>
                    <li>{data.name}</li>
                </Link>))}
            </ul>
        </>
    )
}

export default Vegetables