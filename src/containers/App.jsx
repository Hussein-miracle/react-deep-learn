import React, { Component } from 'react';
// import Radium,{Style} from 'radium';
// import styled from 'styled-components';
// import Errorboundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
// import Person from '../components/Persons/Person/Person';
import Cockpit from "../components/Cockpit/Cockpit";

import classes from './App.module.css';


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
      persons = <Persons persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangeHandler}  
            />;
            
           
      

      btnClasses.push(classes.Red)
      

    }

    
    return (
      <div className={classes.App }>

        <Cockpit title={this.props.appTitle} persons={this.state.persons} showPersons={this.state.showPersons} togglePersonsHandler={ this.togglePersonsHandler }/>


        {persons }
        
        
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;