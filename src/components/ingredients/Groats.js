import React, {useState, useEffect} from 'react';
import {getGroats} from '../../Api';
import {Link} from "react-router-dom";
import How from "../How";
import "../All.css";
import {Card} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const Groats = () => {
    const [groats, setGroats] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let result = await getGroats();
            setGroats(result);
        }
        fetchData();
    },[])

    return (
        <Container maxWidth={'sm'} >
            <How/>
            <Card className="list">
                <List component="nav" aria-label="main mailbox folders">
                    {groats.map((data, index) => (
                        <Link key={index} to={"/funkcje/jak/kasze/" + data.number}>
                            <ListItem button>
                                <ListItemText primary={data.name}/>
                            </ListItem>
                </Link>
                    ))}
                </List>
            </Card>
        </Container>
    );
};

export default Groats