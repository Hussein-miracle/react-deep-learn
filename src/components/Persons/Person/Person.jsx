import React,{Component} from "react";
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

class Person extends Component{
    
    render(){
        console.log("[Person.js] rendering.....");
        return(
        
            <div className={classes.person}>
    
                <p className={`${this.props.children ? "true" :"invert-2"}`} >I'm {this.props.name} and i'm {this.props.age} years old.</p>
    
                <p className={`${this.props.children ? "true" :"invert-2"}`}  > {this.props.children} </p>
    
                { <input className={classes["invert"]}  type="text" onChange={this.props.changed} placeholder={this.props.name} /> }
    
                <DeleteBtn onClick={this.props.click} >delete</DeleteBtn>
    
            </div>
        )
    }
}

export default  Person;                  