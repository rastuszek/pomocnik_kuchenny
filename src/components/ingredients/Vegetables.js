import React, {useState, useEffect} from 'react'
import {getVegetables} from '../../Api'
import {Link} from "react-router-dom";
import How from "../How";
import "../All.css";
import {Card} from "@material-ui/core";
import Container from '@material-ui/core/Container';
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const Vegetables = () => {
    const [vegetables, setVegetables] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let result = await getVegetables();
            setVegetables(result);
        }

        fetchData();
    }, [])

    return (
        <>
            <How/>
            <Container maxWidth={"sm"}>
                <Card className="list">
                    <List component="nav" aria-label="main mailbox folders">
                        {vegetables.map((data, index) => (
                            <Link key={index} to={"/funkcje/jak/warzywa/" + data.number}>
                                <ListItem button>
                                    <ListItemText primary={data.name}/>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Card>
            </Container>
        </>
    );
};

export default Vegetables