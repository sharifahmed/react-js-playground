import React from 'react';
import Person from './Person/Person';

const persons = (props) => (
    props.persons.map((p, i) => {
        return <Person name={p.name} 
                       age={p.age}
                       key={p.id}
                       onInputChange={(event) => props.inputChangeHander(event, p.id)}
                       onClickRemove={() => props.removeHandler(i)}/>
      })
)

export default persons;