import React from "react";
import classes from "./Cockpit.module.scss";


const Cockpit = ({title,persons ,showPersons,togglePersonsHandler }) => {
  console.log(title)
    let btnClasses = [classes.button];
    let styleArray = [];
    if(persons.length > 2){
      styleArray.push(classes.lightblue);
    }
    if(persons.length <= 2){
      styleArray.unshift();
      styleArray.push(classes.red);
    }
    if(persons.length <=1 ){
      styleArray.unshift();
      styleArray.push(classes.bold)
    }

    btnClasses.push(classes.Red)
    return(
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App for {title}</h1>
            <p className={styleArray.join(" ")}>This is really working!</p>
            <button className={btnClasses.join(" ")} alt ={showPersons} onClick={togglePersonsHandler}>Toggle Persons</button>
        </div >
        
    )
}


export default Cockpit;