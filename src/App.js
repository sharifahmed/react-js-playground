import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons : [
      {name: "Sharif Ahmed", age: 31},
      {name: "Aadil Bin Sharif", age: 1}
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

  inputChangeHander = (event) => {
    this.setState({
      persons: [
        {name: "Sharif Ahmed", age: 31},
        {name: event.target.value, age: 1}
      ]
    }); 
  }

  togglePersons = () => {
    const showPerson = this.state.showPersons;
    this.setState({showPersons: !showPerson});
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

    let persons = null;

    if (this.state.showPersons) {
      persons = <div>
                  <Person name={this.state.persons[0].name} 
                          age={this.state.persons[0].age}>
                    I am a Muslim. I worship Allah alone.
                  </Person>
                  <Person name={this.state.persons[1].name} 
                          age={this.state.persons[1].age}
                          onInputChange={this.inputChangeHander}
                          />
                </div>
    }

    return (
      <div className="App">
        <h1>Assalamu Alaikum</h1>
        {persons}
        <button style={style} onClick={this.togglePersons}>Show/Hide</button>
        <button style={style} onClick={() => this.switchHandler(32)}>Switch</button>
        <button style={style} onClick={this.switchHandler.bind(this, 31)}>Switch Back</button>
      </div>
    );
  }
}

export default App;
