import React from 'react';
import "./todoList.css";
import TodoItem from '../todo/todoItem'

function TodoList ({todos}) {
    console.log("todos", todos);
    return (
   
    <ul className="fullList"> 
    {todos.map((todo, index) => {
    <TodoItem key={index} title={todo.title} isDone={todo.isDone} />
    })}
    </ul>);
}

export default TodoList;