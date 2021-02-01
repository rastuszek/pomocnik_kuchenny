import React, {useEffect, useState} from "react";
import {getVarious} from '../../Api';
import {Link} from "react-router-dom";
import How from "../How";
import Container from "@material-ui/core/Container";
import {Card} from "@material-ui/core";


const Various = () => {
    const [various, setVarious] = useState([]);

    useEffect(async () => {
        let result = await getVarious();
        setVarious(result);
    }, [])

    return (
        <Container maxWidth={'sm'} >
            <How/>
            <Card className="cards">
                <ul>
                    {various.map((data, index) => (<Link key={index} to={"/funkcje/jak/inne/" + data.number}>
                        <li>{data.name}</li>
                    </Link>))}
                </ul>
            </Card>
        </Container>
    )
}

export default Various