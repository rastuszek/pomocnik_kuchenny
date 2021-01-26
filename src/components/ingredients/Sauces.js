import React from 'react'
import {Link} from "react-router-dom";

const Sauces = () => {
    return (
        <>
            <ul>
                <Link to={"/funkcje/znajdz/przepisy/3"}>
                    <li>Sos serowy</li>
                </Link>

                <Link to={"/funkcje/znajdz/przepisy/2"}>
                    <li>Sos czosnkowy</li>
                </Link>

                <Link to={"/funkcje/znajdz/przepisy/6"}>
                    <li>Sos winegret</li>
                </Link>

                <Link to={"/funkcje/znajdz/przepisy/8"}>
                    <li>Sos tzaziki</li>
                </Link>
            </ul>
        </>
    )
}

export default Sauces