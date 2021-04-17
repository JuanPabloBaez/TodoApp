import './App.css';
import NewTodoInput from "./components/new-todo-input/newTodoInput";
import TodoList from "./components/todo list/todoList";




export default function App() {
  const [todos, setTodos] = useState([])
  
  function handleDelete(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

   function handleNewTodo (newTodo) {
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
   }

   function handleCompleteTodo(todoId) {
    
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
           todo.isDone = !todo.isDone;
    }
    return todo;
     
  });
  setTodos(newTodos)
}


 
  
  return (
    <div className="App">
      <header className="App-header">
       <h1> Just another List</h1>
       <NewTodoInput addTodo={handleNewTodo} />
       

       {/* <img src='./public/glitch.gif' alt='' /> */}
      </header>
      <main>
       <button onClick={() => setTodos([])}>Clear</button>,
       <TodoList todos={todos} deleteTodo={handleDelete} completedTodo={handleCompleteTodo} /> 
        
      </main>
    </div>
  );
}

