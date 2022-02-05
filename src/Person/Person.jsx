import React from "react";
import styled from "styled-components";
// import Radium from "radium";
import classes from  "./Person.styles.module.scss";

// const StyledInput  = styled.input`
//     background-color: #262626;
//     font:inherit;
//     border:1px solid brown;
//     transition : all linear .3s;
//     padding: 10px;
//     color:#eee;
//     cursor:pointer;
//     &:hover{
//       background-color:lightgreen;
//       color:#000;
//     }
// `
// const StyledDiv = styled.div`
//     width:60%;
//     height: 20%;
//     padding: 1.5rem 2rem;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     text-align: center;
// `;

const DeleteBtn = styled.span`
    font-size:10px;
    border-radius:5px;
    cursor: url(../logo.svg),no-drop;
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
    const rnd = Math.random();

    if(rnd > 0.7){
        throw new Error("Something went wrong")
    }
    return(
        
        <div className={classes.person}>

            <p className={`${children ? "true" :"invert-2"}`} >I'm {name} and i'm {age} years old.</p>

            {/* <p className={`${children ? "true" :"invert-2"}`}  > {children} </p> */}

            { <input className={classes["invert"]}  type="text" onChange={changed} placeholder={name} /> }

            <DeleteBtn onClick={click} >delete</DeleteBtn>

        </div>
    )
}

export default  Person;                  