import React from "react";
import { useLocation, useParams } from "react-router-dom";
import {TodoForm} from '../../ui/TodoForm';
import { useTodos } from "../useTodos";

function EditTodoPage() {

  const location = useLocation();

  const params = useParams();
  const id = Number(params.id);

  const {state, stateUpdaters} = useTodos();
  const { editTodo } = stateUpdaters;
  const { loading, getTodo } = state;

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Cargando...</p>
  } else {
    const todo = getTodo(id);  
    todoText = todo.text;
  };

  return (
    <TodoForm
      label='Edita tu TODO'
      defaultTodoText={todoText}
      sumbitText='Editar'
      sumbitEvent={(newText) => editTodo(id, newText)}
    />
  );
};

export {EditTodoPage};