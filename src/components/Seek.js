import React, {useState, useEffect} from 'react';
import {getRecipes} from "../Api";

const Seek = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect( () => {
        setRecipes(getRecipes());
    }, [])
    console.log(recipes);
    return (
    <div>
        <h1>Tutaj będzie funkcja wyszukania przepisu.</h1>
    </div>
    )
}

export default Seek