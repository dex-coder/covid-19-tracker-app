import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


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
    },
}));

function CountryPicker() {
    const [globalData, setGlobalData] = useState([{}]);
    //here the globalData will get an object that's why we will use ([{}])
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.covid19api.com/summary');
            let data = await response.json();
            let Country = data.Countries;
            setGlobalData(Country)
        }
        fetchData()
    }, [])
    const classes = useStyles();

    return (

        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Country</TableCell>
                        <TableCell align="right">Total Cases</TableCell>
                        <TableCell align="right">Total Death</TableCell>
                        <TableCell align="right">Total Recoved</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {globalData.map((key, ind) => (
                        <TableRow key={ind}>
                            <TableCell component="th" scope="row">{globalData[ind].Country}</TableCell>
                            <TableCell align="right">{globalData[ind].TotalConfirmed}</TableCell>
                            <TableCell align="right">{globalData[ind].TotalDeaths}</TableCell>
                            <TableCell align="right">{globalData[ind].TotalRecovered}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

        // <div className={classes.root}>
        //     <Grid container spacing={3}>
        //         {Object.keys(globalData[0]).map((key, ind) => {
        //             return (
        //                 <Grid item xs={12} sm={4} key={ind}>
        //                     <Paper
        //                         className={classes.paper}
        //                         elevation={3}>
        //                         <h3>{key}</h3>
        //                         <h3>{globalData[0][{key}]}</h3>
        //                     </Paper>
        //                 </Grid>
        //             )
        //         })}
        //     </Grid>
        // </div>
    );
}

export default CountryPicker;
