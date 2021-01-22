import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import './All.css';
import {getRecipes, getVegetables} from "../Api";

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);
const Seek = () => {
    const [state, setState] = useState({
        Jajka: false,
        Ziemniaki: false,
        Brokuł: false,
        Cebula: false,
        Czosnek: false,
    });
    const [recipes, setRecipes] = useState([]);
    const [recipesShow, setRecipesShow] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let result = await getRecipes();
            setRecipes(result);
        }

        fetchData();
    }, []);

    const handleClick = () => {
        let helpTab =[];
        recipes.forEach(recipe => {
            recipe.ingredients.forEach(ingredient => {
                Object.entries(state).map(data => {
                    if (data[1] === true) {
                       if(ingredient.indexOf(data[0]) !== -1){
                           helpTab.push(recipe)
                       }
                    }
                })
            })
        })
        setRecipesShow(helpTab)
    }
console.log(recipesShow);
    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };


    return (
        <div className='seekbutton'>

            <FormGroup row>
                <FormControlLabel
                    control={<Checkbox checked={state.Jajka} onChange={handleChange} name="Jajka"/>}
                    label="Jajka"
                />
                <FormControlLabel
                    control={<Checkbox checked={state.Ziemniaki} onChange={handleChange} name="Ziemniaki"/>}
                    label="Ziemniaki"
                />
                <FormControlLabel
                    control={<Checkbox checked={state.Brokuł} onChange={handleChange} name="Brokuł"/>}
                    label="Brokuł"
                />
                <FormControlLabel
                    control={<Checkbox checked={state.Czosnek} onChange={handleChange} name="Czosnek"/>}
                    label="Czosnek"
                />
                <FormControlLabel
                    control={<Checkbox checked={state.Cebula} onChange={handleChange} name="Cebula"/>}
                    label="Cebula"
                />

            </FormGroup>
            <Button variant="contained" onClick={handleClick} color="primary">
                Wyszukaj przepis
            </Button>
            {/*<Link to="/funkcje/znajdz/przepisy"> <Button variant="success">Wyszukaj przepisy</Button></Link>*/}
        </div>
    )
}

export default Seek