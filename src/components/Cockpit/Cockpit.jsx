import React,{useEffect ,memo,useRef , useContext } from "react";
import classes from "./Cockpit.module.scss";
import AuthContext from "../context/auth-context";

const Cockpit = ({title,personsLength ,showPersons,togglePersonsHandler }) => {

  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  // console.log(title)
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

  // const timer =  setTimeout(() => {
  //     alert("saved data to cloud!");
  //   },1000);


    return () => {
      // clearTimeout(timer)
      console.log("[Cockpit.js] cleanUp Work in useEffect")
    }
  },[personsLength]);


  useEffect(() => {

    toggleBtnRef.current.click();  
    return () => {
      console.log("[Cockpit.js] cleanUp Work in 2nd   useEffect")
      
    }  

  },[toggleBtnRef]);

    let btnClasses = [classes.button];
    let styleArray = [];
    if(personsLength > 2){
      styleArray.push(classes.lightblue);
    }
    if(personsLength <= 2){
      styleArray.unshift();
      styleArray.push(classes.red);
    }
    if(personsLength <=1 ){
      styleArray.unshift();
      styleArray.push(classes.bold)
    }

    btnClasses.push(classes.Red)
    return(
        <div className={classes.Cockpit}>
            <h1>{title}</h1>
            <p className={styleArray.join(" ")}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnClasses.join(" ")}  display = {showPersons ? showPersons : null } onClick={togglePersonsHandler}>Toggle Persons</button>

           
            <button onClick={authContext.login}>Log In</button>
              
              
            
        </div >
        
    )
}


export default memo(Cockpit);
// export default memo(Cockpit);