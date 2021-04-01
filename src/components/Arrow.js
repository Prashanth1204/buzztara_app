import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button } from "@material-ui/core";


const useStyles = makeStyles({
    arrow : {
        margin : "10px 10px 10px 16px",
    }
})

const Arrow=()=>{
    const classes = useStyles();
    return(
        <>
        <Fab color="primary" size="small" className={classes.arrow}>
        <ArrowBackIcon onClick={event =>  window.location.href='/signup'}/>
      </Fab>
        </>
    )
}

export default Arrow;