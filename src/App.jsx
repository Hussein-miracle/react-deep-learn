import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    const personId = this.state.persons.findIndex( person => person.id  === id);

    const person = {
      ...this.state.persons[personId] 
    };
    // const name = "name"
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
    const style = {
      backgroundColor: "#212121",
      font:"inherit",
      "border":"4px solid brown",
      transition : "all linear .3s",
      padding: "10px",
      "color":"#eee",
      cursor:"pointer",
      "&:hover":{
        backgroundColor: "green"
      }
    }

    let persons = null ;
    if(this.state.showPersons){
      persons = (
          <div >
            {
              this.state.persons.map(({name,age,id}) => <Person key={id } name = {name} age={age} click={ () => this.deletePersonHandler(id)} changed = { (e) => this.nameChangeHandler(e,id) }/>)
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

    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler.bind(this)}>Toggle Persons</button>
        {persons}
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;