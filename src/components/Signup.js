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
            <Link to="/buzztara_app" style={{color:"white",textDecoration:"none"}}><Button variant="contained" size="large" color="primary">sign up</Button></Link>
        </div>
        </>
    )
}

export default Signup;