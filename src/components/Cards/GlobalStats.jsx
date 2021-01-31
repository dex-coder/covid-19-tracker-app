import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        marginTop: 30,
        margin: '0 auto',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderBottom: '5px solid rgb(18 247 46)'
    },
    title: {
        color: 'black'
    }
}));

function GlobalStats() {
    const [globalData, setGlobalData] = useState({});
    //here the globalData will get an object that's why we will use {}
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.covid19api.com/summary');
            let data = await response.json();
            let Global = data.Global;
            //console.log(Global.ID)
            delete Global.ID
            console.log(Global)

            setGlobalData(Global)
        }
        fetchData()
    }, [])
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={5} justify="center" alignItems="center">
                {Object.keys(globalData).map((key, ind) => {
                    return (
                        <Grid item xs={10} sm={8} md={6} key={ind} >
                            <Paper
                                className={classes.paper}
                                elevation={3}>
                                <h2 className={classes.title}>{key}</h2>
                                <h3>{globalData[key]}</h3>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

export default GlobalStats;
