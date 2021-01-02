import React from 'react';
import Button from 'react-bootstrap/Button';
import { Switch, Route, Link } from 'react-router-dom';
import Vegetables from './ingredients/Vegetables';

const How = () => (
    <div>

    <h1>Co chcesz ugotować?</h1>

    <ul>
        <Link to="/funkcje/jak/warzywa"> <Button variant="primary">Warzywa</Button></Link>
    </ul>

    <Switch>
        <Route path='/funkcje/jak/warzywa' component={Vegetables}/>
    </Switch>

    </div>

)
export default How;