import React from "react";
import "./Person.styles.scss";


const Person = ({name , age , children = "", click ,changed}) => {
    
    return(
        <div className= "person" >

            <p onClick={click} className={`${children ? "true" :"invert-2"}`} >I'm {name} and i'm {age} years old.</p>

            {/* <p className={`${children ? "true" :"invert-2"}`}  > {children} </p> */}

            { <input type="text" onChange={changed} placeholder={name} /> }
        </div>
    )
}

export default Person;                  