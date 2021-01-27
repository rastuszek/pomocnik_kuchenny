import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './All.css';
import {getRecipes} from "../Api";
import Recipes from "./ingredients/Recipes";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
        Brokul: false,
        Cebula: false,
        Czosnek: false,
        Kurczak: false,
        Wolowina: false,
        Wieprzowina: false,
        Mielone: false,
        Papryka: false,
        Marchew: false,
        MakaZiemniaczana: false,
        MakaPszenna: false,
        Twarog: false,
        SerZolty: false,
        SerFeta: false,
        PomidoryZpuszki:false,
    });
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState(false);
    const [recipesShow, setRecipesShow] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let result = await getRecipes();
            setRecipes(result);
        }

        fetchData();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        let helpTab = [];
        recipes.forEach(recipe => {
            let count = 0;
            Object.entries(state).map(data => {
                if (data[1] === true) {
                    if (recipe.ingredients.indexOf(data[0]) > -1) {
                        count++;
                    }
                    if (count >= 2 && helpTab.indexOf(recipe) < 0) {
                        helpTab.push(recipe);
                    }
                }

            })
        })
        if (helpTab.length < 1) {
            setAlert(true)
            setRecipesShow(helpTab)
        } else {
            setAlert(false)
            setRecipesShow(helpTab)
        }
    }
    console.log(recipesShow);
    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };


    return (
        <Container style={{marginTop: 40}} maxWidth="sm">

            <FormGroup row>

                <Card style={{width: '100%', marginBottom: 30}}>
                    <CardContent>
                        <Typography style={{textAlign: 'center', marginBottom: 20}} variant="h5" component="h2">
                            Warzywa
                        </Typography>
                        <Grid container spacing={3}>

                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={<Checkbox checked={state.Ziemniaki} onChange={handleChange} name="Ziemniaki"/>}
                                    label="Ziemniaki"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={<Checkbox checked={state.Brokul} onChange={handleChange} name="Brokul"/>}
                                    label="Brokuł"
                                />
                            </Grid>
                            <Grid item xs={4}>
                            <FormControlLabel
                                control={<Checkbox checked={state.Papryka} onChange={handleChange} name="Papryka"/>}
                                label="Papryka"
                            />

                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={<Checkbox checked={state.Czosnek} onChange={handleChange} name="Czosnek"/>}
                                    label="Czosnek"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={<Checkbox checked={state.Cebula} onChange={handleChange} name="Cebula"/>}
                                    label="Cebula"
                                />
                            </Grid>

                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={<Checkbox checked={state.Marchew} onChange={handleChange} name="Marchew"/>}
                                    label="Marchew"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>

                            <Grid item xs={5}>
                                <FormControlLabel
                                    control={<Checkbox checked={state.PomidoryZpuszki} onChange={handleChange} name="PomidoryZpuszki"/>}
                                    label="Pomidory z puszki"
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

                <Card style={{width: '100%', marginBottom: 30 }}>
                    <CardContent>
                        <Typography style={{textAlign: 'center', marginBottom: 20}} variant="h5" component="h2">
                            Mięso
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={<Checkbox checked={state.Wolowina} onChange={handleChange} name="Wolowina"/>}
                                    label="Wołowina"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={<Checkbox checked={state.Wieprzowina} onChange={handleChange} name="Wieprzowina"/>}
                                    label="Wieprzowina"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={<Checkbox checked={state.Mielone} onChange={handleChange} name="Mielone"/>}
                                    label="Mięso mielone"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>

                                <Grid item xs={5}>
                                    <FormControlLabel
                                        control={<Checkbox checked={state.Kurczak} onChange={handleChange} name="Kurczak"/>}
                                        label="Pierś z kurczaka"
                                    />
                            </Grid>

                        </Grid>

                    </CardContent>
                </Card>


                <Card style={{width: '100%' }}>
                    <CardContent>
                        <Typography style={{textAlign: 'center', marginBottom: 20}} variant="h5" component="h2">
                            Inne
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={<Checkbox checked={state.Jajka} onChange={handleChange} name="Jajka"/>}
                                    label="Jajka"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={<Checkbox checked={state.SerFeta} onChange={handleChange} name="SerFeta"/>}
                                    label="Ser feta"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={<Checkbox checked={state.SerZolty} onChange={handleChange} name="SerZolty"/>}
                                    label="Ser żółty"
                                />
                            </Grid>

                        </Grid>
                        <Grid container spacing={3}>


                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={<Checkbox checked={state.MakaPszenna} onChange={handleChange} name="MakaPszenna"/>}
                                    label="Mąka pszenna"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={<Checkbox checked={state.Twarog} onChange={handleChange} name="Twarog"/>}
                                    label="Twaróg"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={<Checkbox checked={state.MakaZiemniaczana} onChange={handleChange} name="MakaZiemniaczana"/>}
                                    label="Mąka ziemniaczana"
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </FormGroup>

            <Button variant="contained" onClick={handleClick} color="primary">
                Wyszukaj przepisy
            </Button>


            {recipesShow &&
            <Recipes recipes={recipesShow}/>}
            {alert && window.alert('Za mało składników')}

            <Link to='/funkcje/znajdz/sosy'> <Button variant="contained" color="primary">Sosy, ktore czesto wystepuja
                jako baza w przepisach</Button></Link>

        </Container>
    )
}

export default Seek