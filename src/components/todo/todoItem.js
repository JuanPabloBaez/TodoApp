import React from 'react';
import './todoItem.css';

function TodoItem ({title, isDone}) {
    return(
        <li className={isDone ? "itemDone testClass" : "itemNotDone"}>
            <input type='checkbox'/> 
            {title} 
            <button>delete</button></li>
    )
}

export default TodoItem;