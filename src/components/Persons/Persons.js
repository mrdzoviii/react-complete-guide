import React,{Component} from 'react';
import Person from '../Persons/Person/Person'

class Persons extends Component {
    render(){
    console.log('[Persons.js] rendering from App');
    return this.props.persons.map((person, index) =>
    <Person
        name={person.name}
        age={person.age}
        click={()=>this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)}
        key={person.id}>
        {person.hobbie}</Person>);
    }
}
    
export default Persons;