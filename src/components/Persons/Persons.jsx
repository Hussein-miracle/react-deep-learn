import React from "react";
import Person from "./Person/Person";


const Persons = ( {persons,clicked,changed}  ) => {
    return (persons.map(({name,age,id}) => 
              
                <Person 
                    key={id}
                    name = {name} 
                    age={age} 
                    click={ () => clicked(id)} 
                    changed = { (e) => changed(e,id) } 
                    />
              
                ))
}

export default Persons;