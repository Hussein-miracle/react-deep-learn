import React, { Component } from 'react';
// import Radium,{Style} from 'radium';
// import styled from 'styled-components';
// import Errorboundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
// import Person from '../components/Persons/Person/Person';
import Aux from '../hoc/Auxilliary';
import Cockpit from "../components/Cockpit/Cockpit";
import withClass   from   '../hoc/withClass';
import classes from './App.module.css';
import AuthContext from '../components/context/auth-context';

class App extends Component {
  constructor(props){
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      {id : "a"  , name: 'Max', age: 28},
      {id :  "ff", name: 'Manu', age: 29 },
      {id : "dfg" , name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons : false,
    showCockpit:true,
    changeCounter:0,
    loggedIn:false
  }

  static getDerivedStateFromProps(props,state){
    console.log("[App.js] getDerivedStateFromProps",props )
    return state;
  }

  componentDidMount(){
    console.log("[App.js] componentDidMount");
  }

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

    this.setState((prevState,props) => {
        return {
          persons: [...persons] , changeCounter:prevState.changeCounter + 1}
    },() => {
      console.log(this.state.changeCounter)
    });
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  handleLogin = () => {
    this.setState({loggedIn:true})
  }
  render() {
    console.log("[App.js] render")
    let btnClasses = [classes.Button];

    let persons = null ;
    
    if(this.state.showPersons){
      persons = <Persons persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangeHandler}  
              
            />;
            

      

      btnClasses.push(classes.Red)
      

    }

    const cockpit = (<Cockpit title={this.props.appTitle} personsLength={this.state.persons.length} showPersons={this.state.showPersons} togglePersonsHandler={ this.togglePersonsHandler } />)
    
    return (
      <Aux>

        <button onClick={() => this.setState({showCockpit: !this.state.showCockpit}) }>Remove Cockpit</button>

        <AuthContext.Provider  value={{
          login : this.handleLogin,
          isLoggedIn : this.state.loggedIn
        }}>
            {
              this.state.showCockpit ?  cockpit : null
            }
            


            {persons }
        </AuthContext.Provider>
        
        
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App,classes.App);