import React, {useState, useEffect} from 'react'
import {getVegetables} from '../../Api'
import {Link} from "react-router-dom";
import How from "../How";
import "../All.css";
import {Card} from "@material-ui/core";
import Container from "@material-ui/core/Container";

const Vegetables = () => {
    const [vegetables, setVegetables] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let result = await getVegetables();
            setVegetables(result);
        }
        fetchData();
    },[])

    return (
        <Container maxWidth={'sm'}  >
            <How/>
            <Card className="cards">
            <ul>
                {vegetables && vegetables.map((data, index) => (<Link key={index} to={"/funkcje/jak/warzywa/" + data.number}>
                    <li>{data.name}</li>
                </Link>))}
            </ul>
            </Card>
        </Container>
    )
}

export default Vegetables