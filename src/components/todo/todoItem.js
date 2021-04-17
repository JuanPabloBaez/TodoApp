import React from 'react';
import './todoItem.css';

function TodoItem ({title, isDone ,id , deleteTodo, completedTodo}) {
    return(
        <li className={isDone ? "itemDone testClass" : "itemNotDone"}>
            <input type='checkbox' 
            checked={isDone}
            onChange={() => completedTodo(id)}/> 
            <p>{title}</p> 
            <button onClick={() => deleteTodo(id)}>delete</button></li>
    )
}

export default TodoItem;