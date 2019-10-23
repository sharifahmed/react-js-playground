import React from 'react';

const buttons = (props) => (
    <div>
        <button style={props.style} 
                onClick={props.togglePersons}>Show/Hide</button>
        <button style={props.style} 
                onClick={() => props.switchHandler(32)}>Switch</button>
        <button style={props.style} 
                onClick={props.switchHandler.bind(this, 31)}>Switch Back</button>
    </div>
)

export default buttons;