import React from "react";
import { TodoCounter } from "../../ui/TodoCounter";
import { TodoSearch } from "../../ui/TodoSearch";
import { TodoList } from "../../ui/TodoList";
import { TodoItem } from "../../ui/TodoItem";
import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { Modal } from '../../ui/Modal';
import {TodoForm} from '../../ui/TodoForm';
import TodoHeader from "../../ui/TodoHeader";
import { useTodos } from "../useTodos";
import { ChangeAlert } from "../../ui/ChangeAlert";


function HomePage() {

  const {state, stateUpdaters} = useTodos();

  const {
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
  } = state;
  
  const {
    completeTodo,
    setSearchValue,
    addTodo,
    deleteTodo,
    setOpenModal,
    sincronizeTodos,
  } = stateUpdaters;

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
            onEdit={() => console.log('pene')}
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

      <ChangeAlert sincronize={sincronizeTodos}/>
    </React.Fragment>
    )
}

export { HomePage };
