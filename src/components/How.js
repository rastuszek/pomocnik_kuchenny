import React from "react";
import {getVegetables} from "../Api";
import {Link, Switch} from "react-router-dom";
import Button from "react-bootstrap/Button";
import PrivateRoute from "./PrivateRoute";
import FullVege from "./ingredients/FullVege";


const How = (props) => {
    return (

            <div>
                <h1> Co chcesz ugotować? </h1>

                <Link to="/funkcje/jak/warzywa"> <Button variant="success">Warzywa</Button></Link>
                <Link to="/funkcje/jak/makarony"> <Button variant="success">Makarony</Button></Link>
                <Link to="/funkcje/jak/inne"> <Button variant="success">Inne</Button></Link>
            </div>
    )
}
export default How;