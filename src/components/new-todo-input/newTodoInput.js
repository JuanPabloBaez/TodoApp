import React, { useState} from 'react';
import "./newTodoInput.css"

function NewTodoInput ({addTodo}) {
    const [inputValue, setInputValue] = useState('');
    
    function handleOnKeyDown({keyCode, target}) {
            if (keyCode === 13) saveNewTodo();
    
      }

      function handleInputValue({target}) {
        setInputValue(target.value);  
      }

      function saveNewTodo() {
        const newTodo = {
            id: (Date.now() + Math.random()).toString(),
            title: inputValue,
            isDone: false
        };
        addTodo(newTodo);
        setInputValue("")
      }

    return (<div>
        <input type='text'
        value={inputValue} 
        className='new-input' 
        placeholder="What's next?" 
        onKeyDown={handleOnKeyDown}
        onChange={handleInputValue} />
        <button onClick={saveNewTodo}>Add New</button>
    </div>);
}


export default NewTodoInput;