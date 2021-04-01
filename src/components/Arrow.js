import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    arrow : {
        margin : "10px 10px 10px 16px",
    },
    ss : {
        margin : "10px 10px 10px 16px",
        borderRadius : "50%",
        padding : "10px",
        "&:hover" : {
            backgroundColor : "#E1EBEE",
        }
    }
})

const Arrow=()=>{
    const classes = useStyles();
    return(
        <>
        <Link to="/signup" style={{color:"black",textDecoration:"none"}}><ArrowBackIcon className={classes.ss}/></Link>
        </>
    )
}

export default Arrow;