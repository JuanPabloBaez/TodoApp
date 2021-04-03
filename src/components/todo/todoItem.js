import React from 'react';
import './todoItem.css';

function TodoItem ({title}) {
    return(
        <li className='todoItem'><input type='checkbox'/> {title} <button>delete</button></li>
    )
}

export default TodoItem;