import React, {useEffect, useState} from "react";
import {getVarious} from '../../Api';
import {Link} from "react-router-dom";
import How from "../How";
import Container from "@material-ui/core/Container";
import {Card} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";


const Various = () => {
    const [various, setVarious] = useState([]);

    useEffect(async () => {
        let result = await getVarious();
        setVarious(result);
    }, [])

    return (
        <>
            <How/>
            <Container maxWidth={"sm"}>
                <Card className="list">
                    <List component="nav" aria-label="main mailbox folders">
                        {various.map((data, index) => (
                            <Link key={index} to={"/funkcje/jak/inne/" + data.number}>
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

export default Various