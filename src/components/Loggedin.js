import React from "react";
import Typography from '@material-ui/core/Typography';


const Loggedin=()=>{
    
    return(
        <>
        <div style={{textAlign:"center"}}>
            <h4 className="logo">Buzztara</h4>
            <Typography variant="h4">
                You have been logged in succefully!!
            </Typography>
        </div>
        </>
    )
}

export default Loggedin;