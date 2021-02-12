import React, { useContext } from "react";
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

const Register = () => {
    const classes = useStyles();
    const { handleSingUp, inputs, setInputs } = useContext(firebaseAuth);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleSingUp();
    };

    return (
        <Container maxWidth="md" style={{ marginTop: 50 }}>
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
                                onChange={handleChange}
                                name="email"
                                type="email"
                                value={inputs.email}
                                id="standard-error"
                                label="Adres e-mail:"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={handleSubmit} style={{marginBottom:20}} variant="contained">
                                Zarejestruj
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Card>
        </Container>
    );
};

export default Register;
