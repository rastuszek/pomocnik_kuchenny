import React, {useEffect, useState} from "react";
import {getPasta} from '../../Api';
import {Link} from "react-router-dom";
import How from "../How";
import Container from "@material-ui/core/Container";
import {Card} from "@material-ui/core";

const Pasta = () => {
    const [pasta, setPasta] = useState([]);

    useEffect(async () => {
        let result = await getPasta();
        setPasta(result);
    }, [])

    return (
        <Container maxWidth={'sm'} >
            <How/>
            <Card className="cards">
                <ul>
                    {pasta.map((data, index) => (<Link key={index} to={"/funkcje/jak/makarony/" + data.number}>
                        <li>{data.name}</li>
                    </Link>))}
                </ul>
            </Card>
        </Container>
    )
}

export default Pasta