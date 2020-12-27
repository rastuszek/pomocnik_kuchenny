import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullVege from './FullVege';
import Vegeta from './Vegeta'

const Vegetables = () => (
    <Switch>
        <Route exact path='/funkcje/jak/warzywa' component={FullVege}/>
        <Route path='/funkcje/jak/warzywa/:number' component={Vegeta}/>
    </Switch>

)
export default Vegetables;