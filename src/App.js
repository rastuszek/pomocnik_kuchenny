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


const App = () => {
const {token} = useContext(firebaseAuth);

    return (
        <div className="App">

            <Header />

            <main>
                <Switch>
                    <PrivateRoute exact path='/' component={Intro}/>
                    <PrivateRoute exact path='/funkcje' component={Functions}/>
                    <PrivateRoute path='/inne'  component={Other}/>
                    <Route path='/login'  component={Login}/>
                    <Route path='/register'  component={Register}/>
                    <PrivateRoute path='/funkcje/znajdz' component={Seek}/>
                    <PrivateRoute path='/funkcje/jak' component={How}/>
                </Switch>
            </main>


        </div>
    )
};

export default App;
