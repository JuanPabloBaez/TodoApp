import './App.css';
import NewTodoInput from "./components/new-todo-input/newTodoInput";
import TodoList from "./components/todo list/todoList";




const todos = [{
  id: "134713749319748913",
  title: "cleaning",
  isDone: false
},
{
  id: "34954629579425425",
  title: "Enjoy your eastern with family",
  isDone: false
},
{
  id: "724095784927859",
  title: "Learn about props",
  isDone: false
}]

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1> Just another List</h1>
       <NewTodoInput />
      </header>
      <main>
       <button>Clear</button>,
       <TodoList todos={todos} /> 
        
      </main>
    </div>
  );
}

