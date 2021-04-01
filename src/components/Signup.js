import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


const Signup=()=>{
    
    return(
        <>
        <div style={{textAlign:"center"}}>
            <h4 className="logo">Buzztara</h4>
            <Button variant="contained" size="large" color="primary"><Link to="/buzztara_app" style={{color:"white",textDecoration:"none"}}>sign up</Link></Button>
        </div>
        </>
    )
}

export default Signup;