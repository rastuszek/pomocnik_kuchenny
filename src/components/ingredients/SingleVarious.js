import React, {useEffect, useState} from 'react';
import {getVarious} from "../../Api";

const SingleVarious = (props) => {
    const [various, setVarious] = useState([]);
    let slug = parseInt(props.match.params.slug);

    useEffect(() => {
        setVarious(getVarious());
    }, [])

    return (
        <div>{various.filter(various => various.number === slug).map(various => {
            return (<div key={slug}>{various.description}</div>)
        })}</div>
    )
}

export default SingleVarious;