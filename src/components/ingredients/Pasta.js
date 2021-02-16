import React, {useEffect, useState} from "react";
import {getPasta} from "../../Api";
import {Link} from "react-router-dom";
import How from "../How";
import Container from "@material-ui/core/Container";
import {Card} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Pasta = () => {
    const [pasta, setPasta] = useState([]);

    useEffect(async () => {
        let result = await getPasta();
        setPasta(result);
    }, []);

    return (
        <>
            <How/>
            <Container maxWidth={"sm"}>
                <Card className="list">
                    <List component="nav" aria-label="main mailbox folders">
                        {pasta.map((data, index) => (
                            <Link key={index} to={"/funkcje/jak/makarony/" + data.number}>
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

export default Pasta;
