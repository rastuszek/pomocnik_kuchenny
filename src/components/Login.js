import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { firebaseAuth } from "../provider/authProvider";
import { Button, Container, Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

const Login = () => {
    const classes = useStyles();
    const { handleSingIn, inputs, setInputs } = useContext(firebaseAuth);
    const [redirect, setRedirect] = useState(false);
    const [redirectHome, setRedirectHome] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSingIn();
    };
    const handleRedirect = () => {
        console.log("Zalogowano");
        setRedirect(true);
    };

    return (
        <Container className='cards' maxWidth="sm" >
            <Card className="list">
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                onChange={handleChange}
                                name="password"
                                type="password"
                                value={inputs.password}
                                id="standard-error"
                                label="Hasło:"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={inputs.email}
                                onChange={handleChange}
                                name="email"
                                type="email"
                                id="standard-error"
                                label="Adres e-mail:"
                            />
                        </Grid>
                        <Grid container style={{marginBottom:20}}>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={3}>
                                <Button onClick={handleSubmit} variant="contained">
                                    Zaloguj
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button onClick={handleRedirect} variant="contained">
                                    Rejestracja
                                </Button>
                            </Grid>
                            <Grid item xs={3}></Grid>
                        </Grid>
                    </Grid>
                </form>
            </Card>
            {redirect && <Redirect to="/rejestracja" />}
        </Container>
    );
};

export default Login;
