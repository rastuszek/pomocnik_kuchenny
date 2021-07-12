import React, {useEffect, useState} from 'react';
import {getVegetables} from "../../Api";
import "../All.css";
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';
import How from "../How";


const useStyles = makeStyles((theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

const SingleVege = (props) => {

    const [expanded, setExpanded] = React.useState(false);
    const classes = useStyles();
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [vegetables, setVegetables] = useState([]);
    let slug = parseInt(props.match.params.slug);

    useEffect(async() => {
        let result = await getVegetables();
        setVegetables(result);
    }, [])

    return (
        <div>
            {vegetables.filter(vege => vege.number === slug).map(vege => {
                return (
                    <>
                    <How/>
                    <Container maxWidth={'sm'}>

                        <Card className='description'>
                            <div>
                                <h1>{vege.name}</h1>
                                <img width="400px" src={vege.image}/>
                                <h6 className="h6" >Sposób przygotowania:</h6>
                                <div className="single">
                                    {vege.description}
                                </div>
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                        })}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon/>
                                    </IconButton>

                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent >
                                        <h6>Wartości zdrowotne oraz ciekawostki:</h6>
                                        <Typography  paragraph>
                                            {vege.values}
                                        </Typography>
                                        <Typography paragraph>
                                            {vege.values2}
                                        </Typography>
                                    </CardContent>
                                </Collapse>

                            </div>
                        </Card>
                    </Container>
            </>
                )
            })}
        </div>
    )
}


export default SingleVege;