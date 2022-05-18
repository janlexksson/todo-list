import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/Todolist';

function App() {
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState("all");
  return (
    <div className="App">
     <header>
      <h1>Boba's Todo List</h1>
    </header>
    <Form 
    inputText={inputText} 
    todos={todos} setTodos={setTodos} 
    setInputText={setInputText}
    setStatus={setStatus}
    />
    <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
