import React,{Component,createRef  } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import Radium from "radium";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Auxilliary";
import classes from  "./Person.styles.module.scss";
// import { } from "react";
import AuthContext from "../../context/auth-context"


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
        
        border-width:2px;
        border-style:inset dotted;
        border-color:#212121;
        

    }
`

class Person extends Component{
    constructor(){
        super()
        this.inputElementRef = createRef();
    }
    static contextType = AuthContext;
    
    componentDidMount(){
        // document.querySelector("input").focus();
        this.inputElementRef.current.focus();
        console.log(this.context.isLoggedIn);
    }

    

    render(){
        console.log("[Person.js] rendering.....");
        return(
        
            <>
            <AuthContext.Consumer>
                {(context) =>
                 <Aux> 
                  {context.isLoggedIn ? <p>Logged IN...Boss</p> : <p>Please F**king Login!</p>}

                { context.isLoggedIn ?   <p className={`${this.props.children ? "true" :"invert-2"}`} > I'm {this.props.name} and i'm {this.props.age} years old.</p> : <p> 🌚😒 </p>}
            </Aux> 
                }
                </AuthContext.Consumer>
            
                
    
                <input 
                ref= { this.inputElementRef} className={classes["true"]} 
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} /> 
    
                <DeleteBtn onClick={this.props.click} >delete</DeleteBtn>

            </>
        )
    }
}


Person.propTypes = {
    name:PropTypes.string,
    click:PropTypes.func,
    age:PropTypes.number,
    changed:PropTypes.func
}


export default  withClass(Person,classes.person);                  