import React from "react";


import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";


function AppUI() {

  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
  } = React.useContext(TodoContext);

    return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

   
      <TodoList>
          {error && <p>Ocurrio un error...</p>}
          {loading && <p>Estamos cargando...</p>}
          {(!loading && !searchedTodos.length) && <p>Parece que no hay todos, prueba crear uno!</p>}
  
          {searchedTodos.map(todo => (
            <TodoItem 
              text={todo.text} 
              key={todo.text} 
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
        ))}     
      </TodoList>
       
     

      <CreateTodoButton />

    </React.Fragment>
    )
}

export { AppUI }