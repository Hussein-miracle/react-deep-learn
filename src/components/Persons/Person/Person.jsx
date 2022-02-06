import React from "react";
import styled from "styled-components";
// import Radium from "radium";
import classes from  "./Person.styles.module.scss";



const DeleteBtn = styled.span`
    font-size:10px;
    border-radius:5px;
    cursor: url(../logo.svg),pointer;
    color:red;
    margin-left:2rem;
    padding:10px;
    background-color:#eee;
    transition: all .2s ease-out ;

    &:hover{
        
        background-color:red;
        color:#000;
        font-size:12px;
        text-transform:uppercase;
        border: 2px dashed #000;
        

    }
`

const Person = ({name , age , children = "", click ,changed}) => {
    
    return(
        
        <div className={classes.person}>

            <p className={`${children ? "true" :"invert-2"}`} >I'm {name} and i'm {age} years old.</p>

            <p className={`${children ? "true" :"invert-2"}`}  > {children} </p>

            { <input className={classes["invert"]}  type="text" onChange={changed} placeholder={name} /> }

            <DeleteBtn onClick={click} >delete</DeleteBtn>

        </div>
    )
}

export default  Person;                  