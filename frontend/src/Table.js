/** @jsx React.DOM */
import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Link from "@material-ui/core/Link";
import { makeStyles } from '@material-ui/core/styles';
import GroupIcon from '@material-ui/icons/Group';
import {Paper} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});

export default function SimpleTable() {
    const classes = useStyles();

    const [data, upDateData] = React.useState([]);
    const [firstLoad, setLoad] = React.useState(true);
    let isLoading = true;

    async function sampleFunc() {
        let response = await fetch("/api/employee");
        let body = await response.json();
        upDateData(body);
    }

    if (firstLoad) {
        sampleFunc();
        setLoad(false);
    }

    if (data.length > 0) isLoading = false;

    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <GroupIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Employee Directory
            </Typography>

            {isLoading ? (
                <CircularProgress />
            ) : (
                <TableContainer
                    style={{ width: "80%", margin: "0 10px" }}
                    component={Paper}
                >
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Department</TableCell>
                                <TableCell align="center">Gender</TableCell>
                                <TableCell align="center">Dob</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.department}</TableCell>
                                    <TableCell align="center">{row.gender}</TableCell>
                                    <TableCell align="center">{row.dob}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
            <Link className={classes.link} to="/">
                <Typography align="left">
                    &#x2190; Head back to save data
                </Typography>
            </Link>
        </div>
    );
}