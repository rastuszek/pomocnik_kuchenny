import React from "react";
import {Link,} from "react-router-dom";
import Button from "react-bootstrap/Button";
import './All.css';
import Grid from "@material-ui/core/Grid";


const How = () => {
    return (
        <>
            <div className='text'>
                <h1> Co zamierzasz ugotować? </h1>
            </div>
            <div className="how">
                <Grid className="how" container spacing={4}>
                    <Grid item xs={2}>
                        <a href="/funkcje/jak/warzywa">
                            <img className='photo'
                                 src="https://images.unsplash.com/photo-1557844352-761f2565b576?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZXRhYmxlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"/></a>
                        <Link to="/funkcje/jak/warzywa"> <Button variant="success">Warzywa</Button></Link>

                    </Grid>
                    <Grid item xs={2}>
                        <a href="/funkcje/jak/makarony">
                            <img className='photo'
                                 src="https://images.unsplash.com/photo-1612966874574-e0a92ad2bc43?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTd8fHBhc3RhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"/></a>
                        <Link to="/funkcje/jak/makarony"> <Button variant="success">Makarony</Button></Link>

                    </Grid>
                    <Grid item xs={2}>
                        <a href="/funkcje/jak/kasze">
                            <img className='photo'
                                 src="https://images.unsplash.com/photo-1437252611977-07f74518abd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhcmxleSUyMGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"/></a>
                        <Link to="/funkcje/jak/kasze"> <Button variant="success">Kasze</Button></Link>

                    </Grid>
                    <Grid item xs={2}>
                        <a href="/funkcje/jak/inne">
                            <img className='photo'
                                 src="https://images.unsplash.com/photo-1504283165217-3679a64511fd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGVnZ3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"/></a>
                        <Link to="/funkcje/jak/inne"> <Button variant="success">Inne</Button></Link>
                    </Grid>
                </Grid>
                </div>
        </>


    )
}
export default How;