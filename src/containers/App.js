import React, { Component } from 'react';
import './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }


  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }


  componentDidMount(){
    console.log('[App.js] component did mount from App');
  }

  state = {
    persons:[
      {id:"1", name:"Jovan", age:24 ,hobbie:"Football" },
      {id:"2", name:"Mirko", age:35 ,hobbie:"Tennis"},
      {id:"3", name:"Marko", age:25 }
    ],
      showPersons:false}
  
  nameChangedHandler =(event,id) => {
    const personIndex=this.state.persons.findIndex(person=>person.id===id);
    const person={...this.state.persons[personIndex],name:event.target.value};
    const persons=[...this.state.persons];
    persons[personIndex]=person;
    this.setState({ persons:persons})
  }

  deletePersonHandler= (personIndex) => {
    const persons=this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  togglePersonsHandler =() =>{
    const showPerson=this.state.showPersons;
    this.setState({showPersons:!showPerson});
  }

  render() {
    console.log('[App.js] rendering from App')
    let persons=null;
    if(this.state.showPersons){
      persons=(
          <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
      )
    }


    return (
      <div className="App">
        <Cockpit  
          title={this.props.appTitle}
          showPersons={this.state.showPersons} 
          personsLength={this.state.persons.length} 
          toggle={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
