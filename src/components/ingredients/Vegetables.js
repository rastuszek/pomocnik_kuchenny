import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullVege from './FullVege';

const Vegetables = () => (
    <Switch>
        <Route exact path='/funkcje/jak/warzywa' component={FullVege}/>
    </Switch>

)
export default Vegetables;