import React, { useState } from 'react';
import Person from '../components/Persons/Person/Person';
import './App.css';

const app2 = props => {
    const [personState, setPersonState] = useState(
        {
            persons: [{
                    name: "Sharif Ahmed",
                    age: 31
                },
                {
                    name: "Aadil Bin Sharif",
                    age: 1
                }
            ]
        }
    );

    const [otherState, setOtherState] = useState('some other state');

    const switchHandler = () => {
        setPersonState(
            {
                persons: [{
                        name: "Sharif Ahmed",
                        age: 32
                    },
                    {
                        name: "Aadil Bin Sharif",
                        age: 1
                    }
                ]
            }
        );
    }

    return (
        <div className="App">
        <h1>Assalamu Alaikum</h1>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}>
          I am a Muslim. I worship Allah alone.
        </Person>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
        <button onClick={switchHandler}>Switch</button>
      </div>
    );
}

export default app2;