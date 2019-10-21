import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons : [
      {name: "Sharif Ahmed", age: 31},
      {name: "Aadil Bin Sharif", age: 1}
    ]  
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
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>
          I am a Muslim. I worship Allah alone.
        </Person>
        <Person name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                onInputChange={this.inputChangeHander}
                />
        <button style={style} onClick={() => this.switchHandler(32)}>Switch</button>
        <button style={style} onClick={this.switchHandler.bind(this, 31)}>Switch Back</button>
      </div>
    );
  }
}

export default App;
