import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Header = () => (
    <header>
        <div>
                <Button component={ Link } to="/" variant="contained" color="primary" >Wprowadzenie</Button>
                <Button component={ Link } to="/funkcje" variant="contained" color="primary">Funkcje</Button>
                <Button component={ Link } to="/inne" variant="contained" color="primary">Inne</Button>
        </div>
    </header>
)

export default Header