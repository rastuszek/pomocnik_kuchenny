import React from 'react';
import {Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



const Functions = () => (
    <div>
        <ButtonGroup>
            <Link to="/funkcje/znajdz"> <Button variant="primary">Znajdź przepis</Button></Link>
            <Link to="/funkcje/jak"> <Button variant="primary">Jak ugotować</Button></Link>
        </ButtonGroup>

    </div>
)

export default Functions