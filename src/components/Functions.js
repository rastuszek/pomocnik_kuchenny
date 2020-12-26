import React from 'react';
import {Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './All.css';


const Functions = () => (
    <div>
        <ul>
            <Button component={ Link } to="/funkcje/znajdz" variant="contained" color="primary" >Znajdź przepis</Button>
            <Button component={ Link } to="/funkcje/jak" variant="contained" color="primary" >Jak ugotować</Button>
        </ul>
    </div>
)

export default Functions