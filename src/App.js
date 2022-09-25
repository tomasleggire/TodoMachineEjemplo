import React from "react";
//import './App.css';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  {text: "Cortar cebolla", completed: false},
  {text: "Completar el curso de react", completed: false},
  {text: "Llorar todo el dia", completed: false}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>      
        {todos.map(todo => (
          <TodoItem text={todo.text} key={todo.text}/>
        ))}     
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
