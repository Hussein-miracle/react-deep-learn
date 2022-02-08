import React,{PureComponent} from "react";
import Person from "./Person/Person";
import AuthContext from "../context/auth-context";
// const State = {}

class Persons extends PureComponent{
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log("[Persons.js] shouldComponentUpdate");
    //     if(nextProps.persons !== this.props.persons  ||nextProps.clicked !== this.props.clicked  || nextProps.changed !== this.props.changed){
    //         return true; 
    //     }else{
    //         return false;
    //     }

    //     // return true;
    // }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return {message : "Snapshot!"}
    }

    componentWillUnmount(){
        console.log("[Persons.js] componentWillUnmount");
    }
    componentDidMount(){
        console.log("[Persons.js] componentDidMount");
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("[Persons.js] componentDidUpdate");
        console.log(snapshot);
    }
    
    render(){
        console.log("[Persons.js] rendering.....");

        return ( this.props.persons.map(({name,age,id}) => 
            
                <Person 
                    key={id}
                    name = {name} 
                    age={age} 
                    click={ () => this.props.clicked(id)} 
                    changed = { (e) => this.props.changed(e,id) } 
                    
                    />
            
                )
        )
            
    }
}

export default Persons;