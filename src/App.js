import React, {useContext} from "react";
import "./components/All.css";
import Register from "./components/Register";
import {Route, Switch} from "react-router-dom";
import Intro from "./components/Intro";
import Other from "./components/Other";
import Seek from "./components/Seek";
import How from "./components/How";
import {firebaseAuth} from "./provider/authProvider";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Vegetables from "./components/ingredients/Vegetables";
import SingleVege from "./components/ingredients/SingleVege";
import Pasta from "./components/ingredients/Pasta";
import SinglePasta from "./components/ingredients/SinglePasta";
import Various from "./components/ingredients/Various";
import SingleVarious from "./components/ingredients/SingleVarious";
import Recipes from "./components/ingredients/Recipes";
import SingleRecipe from "./components/ingredients/SingleRecipe";
import Groats from "./components/ingredients/Groats";
import SingleGroat from "./components/ingredients/SingleGroat";
import RecipesAll from "./components/ingredients/RecipesAll";
import Sauces from "./components/ingredients/Sauces";
import NavBar from "./components/NavBar";
import {CounterDown} from "./components/CounterDown";

import "./components/All.css";

const App = () => {
    const {token} = useContext(firebaseAuth);

    return (
        <div className='all'>
            <NavBar/>
            <div>
                <Route path="/logowanie" component={Login}/>
                <Route path="/rejestracja" component={Register}/>

                <Switch>
                    <PrivateRoute exact path="/" component={Intro}/>
                    <PrivateRoute path="/inne" component={Other}/>
                    <PrivateRoute exact path="/funkcje/znajdz" component={Seek}/>
                    <PrivateRoute exact path="/funkcje/znajdz/przepisy" component={RecipesAll}
                    />
                    <PrivateRoute path="/funkcje/znajdz/przepisy/:slug/" component={SingleRecipe}
                    />
                    <PrivateRoute exact path="/funkcje/jak" component={How}/>
                    <PrivateRoute exact path="/funkcje/jak/warzywa" component={Vegetables}
                    />
                    <PrivateRoute path="/funkcje/jak/warzywa/:slug" component={SingleVege}
                    />
                    <PrivateRoute exact path="/funkcje/jak/makarony" component={Pasta}/>
                    <PrivateRoute path="/funkcje/jak/makarony/:slug" component={SinglePasta}
                    />
                    <PrivateRoute exact path="/funkcje/jak/inne" component={Various}/>
                    <PrivateRoute path="/funkcje/jak/inne/:slug" component={SingleVarious}
                    />
                    <PrivateRoute exact path="/funkcje/jak/kasze" component={Groats}/>
                    <PrivateRoute path="/funkcje/jak/kasze/:slug" component={SingleGroat}
                    />
                    <PrivateRoute exact path="/minutnik" component={CounterDown} />
                    <PrivateRoute exact path="/funkcje/znajdz/sosy" component={Sauces}/>
                </Switch>
            </div>
        </div>
    );
};

export default App;
