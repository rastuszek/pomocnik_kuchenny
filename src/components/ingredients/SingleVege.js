import React, {useEffect, useState} from 'react';
import {getVegetables} from "../../Api";

const SingleVege = (props) => {
    const [vegetables, setVegetables] = useState([]);
    let slug = parseInt(props.match.params.slug);

    useEffect(() => {
        setVegetables(getVegetables());
    }, [])

    return (
        <div>{vegetables.filter(vege => vege.number === slug).map(vege => {
            return (<div key={slug}>{vege.description}</div>)
        })}</div>
    )
}

export default SingleVege;