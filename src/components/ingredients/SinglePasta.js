import React, {useEffect, useState} from 'react';
import {getPasta} from "../../Api";

const SinglePasta = (props) => {
    const [pasta, setPasta] = useState([]);
    let slug = parseInt(props.match.params.slug);

    useEffect(() => {
        setPasta(getPasta());
    }, [])

    return (
        <div>{pasta.filter(pasta => pasta.number === slug).map(pasta => {
            return (<div key={slug}>{pasta.description}</div>)
        })}</div>
    )
}

export default SinglePasta;