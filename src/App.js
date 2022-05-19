//Importing components
import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/Todolist';

function App() {
  //Input to form value + function so i can chang evalue
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState("all");
  const[filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
         setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

//lokal storage as instycted from video
  const saveLocalTodos = () => {
    localStorage.setItem("todos",  JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if( localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
       setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
     <header>
      <h1>Boba's Todo List</h1>
    </header>
    {/* Imported from form.js */}
    <Form 
    inputText={inputText} 
    todos={todos} 
    setTodos={setTodos} 
    setInputText={setInputText}
    setStatus={setStatus}
    
    />
    <TodoList 
    filteredTodos={filteredTodos}
    setTodos={setTodos}
    todos={todos} 
    />
    </div>
  );
}

export default App;
