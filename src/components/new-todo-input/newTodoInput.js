import React from 'react';
import "./newTodoInput.css"

//const userInput = ReactDOM.findDOMNode(<NewTodoInput />).getElementsByClassName('new-input').value;

function NewTodoInput () {
    return (<div>
        <input type='text' id='userInput' className='new-input' placeholder="What's next?" />
        <button>Add New</button>
    </div>);
}


export default NewTodoInput;