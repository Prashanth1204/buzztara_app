import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import validator from 'validator';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import "../index.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    password : {
        marginLeft :"10%",
    },
    btn : {
        padding : "0.6vw 10vw",
        borderRadius : "8px",
        marginLeft : "2.7vw",
        marginTop : "10px",
        "@media (max-width:700px)":{
            padding : "1.5vw 16vw",
            borderRadius : "8px",
            marginLeft : "2.7vw",
            marginTop : "10px",
        },
        "@media screen and (min-width:701px)":{
            padding : "1vw 9vw",
        }
    },
    signupbtn : {
        padding : "0.6vw 8.6vw",
        borderRadius : "8px",
        marginLeft : "2.7vw",
        marginTop : "19px",
        "@media (max-width:700px)":{
            padding : "1.5vw 10vw",
            borderRadius : "8px",
            marginLeft : "2.7vw",
            marginTop : "19px",
        },
        "@media (min-width:701px)":{
            padding : "1vw 8vw",
        }
    },
    signup : {
        padding : "0.6vw 8.6vw",
    },
    checkbox : {
        marginLeft : "33%",
        "@media (max-width:700px)":{
            marginLeft : "0",
        },
        "@media (min-width:701px)":{
            marginLeft : "29%",
        },
        "@media (min-width:1140px)":{
            marginLeft : "33%",
        }
    },
    o : {
        marginLeft : "-33%",
        "@media (max-width:700px)":{
            marginLeft : "0",
            maxWidth : "56vw",
            marginTop : "-4px",
        },
        "@media (min-width:701px)":{
            marginLeft : "-2.1%",
            maxWidth : "40vw",
            marginTop : "-4px",
        },
        "@media (min-width:1140px)":{
            marginLeft : "-4%",
            marginTop : "-3px",
        },
        "@media (min-width:1300px)":{
            marginLeft : "-6%",
            marginTop : "-3px",
        }
    },
    tick : {
        color : "blue",
        fontSize : "30px",
        marginLeft : "-2.9vw",
        "@media (max-width:700px)":{
            marginLeft : "-7vw",
            fontSize : "24px",
        },
        "@media (min-width:701px)":{
           marginLeft : "-5vw",
           fontSize : "22px",
        }
    },
    pswdtick : {
        color : "blue",
        fontSize : "30px",
        marginLeft : "-2.9vw",
        "@media (max-width:700px)":{
            marginLeft : "-12vw",
            fontSize : "24px",
        },
        "@media (min-width:701px)":{
            marginLeft : "-5vw",
            fontSize : "22px",
         }
    },
    password_feed : {
        color : "red",
        fontSize : "16px",
    },
    eyeopen : {
        marginLeft : "-24px",
        transform : "translate(-11px,4px)",
        cursor : "pointer",
    }
})
const Form = ()=>{
    const classes = useStyles();
    const [toggle,settoggle] = React.useState("password");
    const [btnstatus,setbtnstatus] = React.useState(true); 
    const [checked,setchecked] = React.useState(false);
    const [tickstatus,settickstatus] = React.useState(true);
    const [pswdstatus,setpswdstatus] = React.useState(true); 
    const [pswdtickstatus,setpswdtickstatus] = React.useState(true);
    const checkboxchanged = ()=>{
        if(btnstatus==true&&tickstatus==false&&pswdstatus==true&&checked==false){
        setchecked(true);
        setbtnstatus(false);
        }
        else{
        setchecked(false);
        setbtnstatus(true);
        }
    }
    const eyefun=()=>{
        if(toggle=="text"){
            settoggle("password");
        }
        else{
            settoggle("text");
        }
    }

    //mail validation
    const validateEmail = (e) => {
    var email = e.target.value
    
    if (validator.isEmail(email)) {
        settickstatus(false);
        if(checked&&pswdstatus==true){
            setbtnstatus(false);
        }
    } else {
        settickstatus(true);
        setbtnstatus(true);
    }
    }
    //password validation
    const validatePassword = (e) => {
    var pwd = e.target.value
    
    if (pwd.length<8) {
        setpswdstatus(false);
        setpswdtickstatus(true);
        setbtnstatus(true);
    } else {
        setpswdstatus(true);
        setpswdtickstatus(false);
        if(checked&&tickstatus==false){
            setbtnstatus(false);
        }
    }
    }
    return (
     <>
     <div className="form">
     <h6 className="your_email">Your Email</h6>
     <input type="text" className="email" onChange={(e) => validateEmail(e)}></input><span hidden={tickstatus} className={classes.tick}>&#10003;</span>
     <h6 className="your_email">Password</h6>
     <input type={toggle} className="password" onChange={(e) => validatePassword(e)}></input><VisibilityIcon className={classes.eyeopen} onClick={eyefun}/> <span hidden={pswdtickstatus} className={classes.pswdtick}>&#10003;</span>
     <div><small hidden={pswdstatus} className={classes.password_feed}>*Password must be atleast 8 characters</small></div>
     <br></br>

     <Grid container wrap="nowrap" spacing={2}>
          <Grid item className={classes.checkbox}>
          <Checkbox
            color="primary"
            onChange={checkboxchanged}
            checked={checked}
          ></Checkbox>
          </Grid>
          <Grid item xs className={classes.o}>
            <p>I agree to the <a href="#">Terms and Conditions</a> and the <a href="#">Privacy policies</a></p>
          </Grid>
     </Grid>

    <Button variant="contained" color="primary" className={classes.btn} disabled={btnstatus}>
    <Link to="/logged" style={{color:"white",textDecoration:"none"}}>create account</Link> 
    </Button><br></br>
    <Button variant="outlined" color="primary" className={classes.signupbtn} startIcon={<VpnKeyIcon></VpnKeyIcon>}>
    Sign up with Google
    </Button>
    <br></br>
    <div className="login">Already have an account? <a href="#">Login</a></div>

     
     
      </div>
     </>
    );
}

export default Form;