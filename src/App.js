import React from "react";
//import './App.css';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  {text: "Cortar cebolla", completed: true},
  {text: "Completar el curso de react", completed: false},
  {text: "Llorar todo el dia", completed: false},
  {text: "Llorar todo el dia de nuevo", completed: false}
]

function App() {
   
  const [todos, setTodo] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    })
  }

  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>      
        {searchedTodos.map(todo => (
          <TodoItem 
            text={todo.text} 
            key={todo.text} 
            completed={todo.completed}
          />
        ))}     
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
