import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const Signup=()=>{
    
    return(
        <>
        <div style={{textAlign:"center"}}>
            <h4 className="logo">Buzztara</h4>
            <Button variant="contained" size="large" color="primary" onClick={event =>  window.location.href='/buzztara_app/'}>Sign up</Button>
        </div>
        </>
    )
}

export default Signup;