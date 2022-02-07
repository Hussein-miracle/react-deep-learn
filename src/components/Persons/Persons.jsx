import React from "react";
import Person from "./Person/Person";

const State = {}

class Persons extends React.Component{
    // static getDerivedStateFromProps(props,state){
    //     console.log("[Persons.js] getDerivedStateFromProps");
    //     return state;
    // }

    // componentWillReceiveProps(props){
    //     console.log("[Persons.js] componentWillReceiveProps",props);
    // }


    shouldComponentUpdate(nextProps,nextState){
        console.log("[Persons.js] shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return {message : "Snapshot!"}
    }

    

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("[Persons.js] componentDidUpdate");
        console.log(snapshot);
    }
    
    render(){
        console.log("[Persons.js] rendering.....");

        return (this.props.persons.map(({name,age,id}) => 
              
                <Person 
                    key={id}
                    name = {name} 
                    age={age} 
                    click={ () => this.props.clicked(id)} 
                    changed = { (e) => this.props.changed(e,id) } 
                    />
              
                ));
    }
}

export default Persons;