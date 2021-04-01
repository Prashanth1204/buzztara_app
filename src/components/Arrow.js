import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";


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
        <Link to="/signup" style={{color:"white",textDecoration:"none"}}><ArrowBackIcon /></Link>
      </Fab>
        </>
    )
}

export default Arrow;