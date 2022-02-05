import React from "react";
import styled from "styled-components";
// import Radium from "radium";
import "./Person.styles.scss";

const StyledDiv = styled.div`
    width:60%;
    height: 20%;
    padding: 1.5rem 2rem;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;
`;


const Person = ({name , age ,style , children = "", click ,changed}) => {
    
    return(
        <StyledDiv>

            <p className={`${children ? "true" :"invert-2"}`} >I'm {name} and i'm {age} years old.</p>

            {/* <p className={`${children ? "true" :"invert-2"}`}  > {children} </p> */}

            { <input style = {{...style}} className = "invert" type="text" onChange={changed} placeholder={name} /> }

            <span onClick={click}  style={{
                fontSize:"14px",
                borderRadius:"5px",
                cursor:"pointer",
                color:"red",
                marginLeft:"2rem",
                padding:"10px",
                backgroundColor:"#eee"
            }}>delete</span>
            
        </StyledDiv>
    )
}

export default Person;                  