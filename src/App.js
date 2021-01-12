import React, {useContext} from "react";
import './App.css';
import Header from './components/Header'
import Register from "./components/Register";
import {Route, Switch} from "react-router-dom";
import Intro from "./components/Intro";
import Functions from "./components/Functions";
import Other from "./components/Other";
import Seek from "./components/Seek";
import How from "./components/How";
import {firebaseAuth} from "./provider/authProvider";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import SingleVegetable from "./components/ingredients/SingleVegetable";
import FullVege from "./components/ingredients/FullVege";


const App = () => {
const {token} = useContext(firebaseAuth);

    return (

        <div className="App">

            <div>
                <Route path='/logowanie'  component={Login}/>
                <Route path='/rejestracja'  component={Register}/>
            </div>

            <Header />

            <div>
                <Switch>
                    <PrivateRoute exact path='/' component={Intro}/>
                    <PrivateRoute exact path='/funkcje' component={Functions}/>
                    <PrivateRoute path='/inne'  component={Other}/>
                    <PrivateRoute path='/funkcje/znajdz' component={Seek}/>
                    <PrivateRoute exact path='/funkcje/jak' component={How}/>
                    <PrivateRoute path='/funkcje/jak/warzywa' component={FullVege}/>
                    {/*<PrivateRoute path='/funkcje/jak/warzywa/:slug' component={FullVege}/>*/}


                </Switch>
            </div>



        </div>
    )
};

export default App;
