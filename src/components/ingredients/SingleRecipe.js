import React, {useEffect, useState} from 'react';
import {getRecipes} from "../../Api";
import "../All.css";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";


const SingleRecipe = (props) => {
    const [recipes, setRecipes] = useState([]);
    let slug = parseInt(props.match.params.slug);

    useEffect(() => {
        async function fetchData() {
            let result = await getRecipes();
            setRecipes(result);
        }

        fetchData().then();
    }, [])

    return (

        <div>
            {recipes.filter(recipe => recipe.number === slug).map(recipe => {
                return (
                    <Container maxWidth={'sm'}>
                        <Card className='description'>
                            <h1>{recipe.name}</h1>
                            <div className="single">
                                <h6>Składniki:</h6>
                                <ul className="tips">
                                    {recipe.composition.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                                </ul>
                                <h6>Sposób przygotowania:</h6>
                                {recipe.description}
                            </div>


                        </Card>
                    </Container>
                )
            })}
        </div>
    )
}

export default SingleRecipe;