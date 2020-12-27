import React from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Route, Link } from 'react-router-dom';
import Vegetables from './Vegetables';

const How = () => (
    <div>

    <h1>Co chcesz ugotować?</h1>

    <ul>
        <Button component={ Link } to="/funkcje/jak/warzywa" variant="contained" color="primary" >Warzywa</Button>
    </ul>

    <Switch>
        <Route path='/funkcje/jak/warzywa' component={Vegetables}/>
    </Switch>

    </div>

)
export default How;