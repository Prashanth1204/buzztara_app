import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    heading : {
        minWidth : 80,
        marginTop : "20px",
        "@media (max-width:701px)":{
            marginTop : "20px",
            marginBottom : "40px",
            marginLeft : "10px",
        },
        "@media (min-width:701px)":{
            textAlign : "center",
        }
    },
})
const Heading = ()=>{
    const classes = useStyles();
    return (
     <>
     <Typography
     variant="h3"
     className={classes.heading}
     //align="center"
     >
     Create account
     </Typography>
     </>
    );
}

export default Heading;