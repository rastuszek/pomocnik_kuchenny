import React from 'react'
import {Link} from "react-router-dom";

const Sauces = () => {
    return (
        <div className='how'>
            <h1> Jakiego sosu potrzebujesz do przepisu? </h1>
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
        </div>
    )
}

export default Sauces