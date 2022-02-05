import React, { Component } from 'react';
// import Radium,{Style} from 'radium';
// import styled from 'styled-components';
import Errorboundary from './ErrorBoundary/ErrorBoundary';

import classes from './App.module.css';
import Person from './Person/Person';

// const StyledButton = styled.button`
//   background-color:${ props => props.alt ? "blue" : "red" };
//   color:#fff;
//   font:inherit;
//   border:1px solid brown;
//   padding:8px;
//   cursor:pointer;
//   transition: all .3s linear; 

//   &:hover{
//     background-color:gold;
//     color:#eee;
//     border:2px solid black;
//     border-radius: ${props => props.alt ? "16px": "4px"};
//   }

//   &:active {
//     background-color:deeppink;
//     color:#000;
//     border:2px solid brown;
//     border-radius:8px;
//     transform: scale(0.92) translateY(-5px);
//   }

// `

class App extends Component {
  state = {
    persons: [
      {id : "a"  , name: 'Max', age: 28 },
      {id :  "ff", name: 'Manu', age: 29 },
      {id : "dfg" , name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons : false
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { id : "a" ,name: newName, age: 28 },
        {id :  "ff",  name: 'Manuel', age: 39 },
        {id : "dfg", name: 'Stephan', age: 24 }
      ]
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    const persons1 = [...this.state.persons];

    // console.log(persons);
    persons.splice(personIndex,1)
    
    
    this.setState({persons:persons});
    
  }

  nameChangeHandler = (event ,id) => {
    // const person = this.state.persons.find( person => person.id  === id);
    // debugger;
    const personId = this.state.persons.findIndex( person => person.id  === id);

    const person = {
      ...this.state.persons[personId] 
    };
    
    person["name"] = event.target.value;
    // person.name = event.target.value;

    // const personObj = Object.assign({},this.state.persons[personId])
    const persons = [...this.state.persons];
    persons[personId] = person; 

    this.setState({
      persons: [...persons] });
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  render() {
    
    let btnClasses = [classes.Button];

    let persons = null ;
    if(this.state.showPersons){
      persons = (
          <div >
            {
              this.state.persons.map(({name,age,id}) => 
              <Errorboundary key={id} >
                <Person 
                  
                  name = {name} 
                  age={age} 
                  click={ () => this.deletePersonHandler(id)} changed = { (e) => this.nameChangeHandler(e,id) } 
                    />
              </Errorboundary> 
                )
            }
            
            {/* <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click = {this.switchNameHandler.bind(this,"ade")}
              changed = {this.nameChangeHandler}
            >
              My Hobbies: Racing
            </Person> */}
          </div> 
      )

      btnClasses.push(classes.Red)
      // style.backgroundColor = "gold";
      // // style[":hover"] = {
      // //   backgroundColor:"lightbrown",
      // //   color:"#212121"

      // // }

    }

    let styleArray = [];
    if(this.state.persons.length > 2){
      styleArray.push(classes.lightblue);
    }
    if(this.state.persons.length <= 2){
      styleArray.unshift();
      styleArray.push(classes.red);
    }
    if(this.state.persons.length <=1 ){
      styleArray.unshift();
      styleArray.push(classes.bold)
    }
    return (
      <div className={classes.App }>
        <h1>Hi, I'm a React App</h1>
        <p className={styleArray.join(" ")}>This is really working!</p>
        <button className={btnClasses.join(" ")} alt ={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;