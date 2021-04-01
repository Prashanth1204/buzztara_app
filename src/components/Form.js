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
            padding : "1.7vw 17.8vw",
            borderRadius : "8px",
            marginLeft : "1.2vw",
            marginTop : "10px",
            maxWidth : "300px",
        },
        "@media screen and (min-width:701px)":{
            padding : "1vw 9.1vw",
        }
    },
    signupbtn : {
        padding : "0.6vw 8.6vw",
        borderRadius : "8px",
        marginLeft : "2.7vw",
        marginTop : "19px",
        "@media (max-width:700px)":{
            padding : "1.5vw 10.2vw",
            borderRadius : "8px",
            marginLeft : "1.3vw",
            marginTop : "17px",
            maxWidth : "300px",
        },
        "@media (min-width:701px)":{
            padding : "1vw 7.1vw",
        }
    },
    signup : {
        padding : "0.6vw 8.6vw",
    },
    checkbox : {
        marginLeft : "33%",
        "@media (max-width:700px)":{
            marginLeft : "9.5%",
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
            marginLeft : "-20px",
            maxWidth : "66vw",
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
    const [mailerror,setmailerror] = React.useState(true);
    const [path,setpath] = React.useState("/buzztara_app");
    const inputcheck=()=>{
        if(pswdtickstatus==true){
            setpswdstatus(false);
        }
        else{
            setpswdstatus(true);
        }
        if(tickstatus==true){
            setmailerror(false);
        }
        else{
            setmailerror(true);
        }
        
    }
    const checkboxchanged = ()=>{
        if(checked==true){
            setchecked(false);
            setbtnstatus(true);
        }
        else{
            setchecked(true);
            setbtnstatus(false);
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
        if(pswdtickstatus==false){
            setpath("/logged");
        }
        else{
            setpath("/buzztara_app");
        }
        
    } else {
        settickstatus(true);
        setpath("/buzztara_app");
        
    }
    }
    //password validation
    const validatePassword = (e) => {
    var pwd = e.target.value
    
    if (pwd.length<8) {
       // setpswdstatus(false);
        setpswdtickstatus(true);
        
    } else {
       // setpswdstatus(true);
        setpswdtickstatus(false);
        
    }
    if(tickstatus==false && pwd.length>=8){
        setpath("/logged");
    }
    else{
        setpath("/buzztara_app");
    }
    }
    return (
     <>
     <div className="form">
     <h6 className="your_email">Your Email</h6>
     <input type="text" className="email" onChange={(e) => validateEmail(e)}></input><span hidden={tickstatus} className={classes.tick}>&#10003;</span>
     <div><small hidden={mailerror} className={classes.password_feed}>*Enter valid mail</small></div>
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

     <Button variant="contained" color="primary" className={classes.btn} disabled={btnstatus} onClick={inputcheck}>
     <Link to={path} style={{color:"white",textDecoration:"none"}} onClick={inputcheck}>create account</Link>
    </Button> <br></br>
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