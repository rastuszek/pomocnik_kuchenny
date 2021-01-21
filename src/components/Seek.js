import React from 'react';
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import './All.css';

const Seek = () => {

    return (
        <div className='seekbutton'>
        <h1>Tutaj będą listy składników do wyboru i przycisk wyszukaj</h1>
        <Link to="/funkcje/znajdz/przepisy"> <Button  variant="success">Wyszukaj przepisy</Button></Link>
        </div>


    )
}

export default Seek