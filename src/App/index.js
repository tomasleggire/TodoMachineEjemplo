import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from '../Modal';
import {TodoForm} from '../TodoForm';
import TodoHeader from "../TodoHeader";
import { useTodos } from "./useTodos";
import { ChangeAlertWithStorageListener } from "../ChangeAlert";


function App() {

  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>


      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <p>Ocurrio un error...</p>}
        onLoading={() => <p>Estamos cargando...</p>}
        onEmptyTodos={() => <p>Parece que no hay todos, prueba crear uno!</p>}

        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }

        // render={todo => (
        //   <TodoItem 
        //     text={todo.text} 
        //     key={todo.text} 
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {todo => (
          <TodoItem 
            text={todo.text} 
            key={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}

      </TodoList>
       
      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}      

      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />

      <ChangeAlertWithStorageListener sincronize={sincronizeTodos}/>
    </React.Fragment>
    )
}

export default App;
