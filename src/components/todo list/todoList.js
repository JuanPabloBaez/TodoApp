import React from 'react';
import "./todoList.css";
import TodoItem from '../todo/todoItem'

function TodoList ({todos, deleteTodo, completedTodo}) {
   
    return (
   <div>
        <ul className="fullList"> 
        {todos.map((todo, index) => (
            <TodoItem
            id={todo.id} 
            key={index} 
            title={todo.title} 
            isDone={todo.isDone}
            deleteTodo={deleteTodo}
            completedTodo={completedTodo} />
        ))}
        </ul>
    </div>);
}

export default TodoList;