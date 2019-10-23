import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import './App.css';

class App extends Component {
  state = {
    persons : [
      {id: 1, name: "Sharif Ahmed", age: 31},
      {id: 3, name: "Aadil Bin Sharif", age: 1}
    ],
    showPersons: false
  }

  switchHandler = (age) => {
    this.setState({
      persons: [
        {name: "Sharif Ahmed", age: age},
        {name: "Aadil Bin Sharif", age: 1}
      ]
    }); 
  }

  inputChangeHander = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    let updatedName = event.target.value;

    const person = {...this.state.persons[personIndex]};
    person.name = updatedName;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons}); 
  }

  removeHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersons = () => {
    const showPerson = this.state.showPersons;
    this.setState({showPersons: !showPerson});
  }
  
  getPersons = () => {
    if (!this.state.showPersons) {
      return null;
    }
    return  <div>
              <Persons persons={this.state.persons}
                        inputChangeHander={this.inputChangeHander}
                        removeHandler={this.removeHandler}/>
            </div>
  }

  render() {
    const style = {
      color: '#fff',
      backgroundColor: '#337ab7',
      borderColor: '#2e6da4',
      padding: '6px 12px',
      marginRight: '10px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Assalamu Alaikum</h1>
        {this.getPersons()}
        <button style={style} onClick={this.togglePersons}>Show/Hide</button>
        <button style={style} onClick={() => this.switchHandler(32)}>Switch</button>
        <button style={style} onClick={this.switchHandler.bind(this, 31)}>Switch Back</button>
      </div>
    );
  }
}

export default App;
