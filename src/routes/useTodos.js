import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {

      const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        sincronizeItem: sincronizeTodos,
      } = useLocalStorage('TODOS_V2', []);
    
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
      };
    
      const completeTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        if (newTodos[todoIndex].completed === true) {
          newTodos[todoIndex].completed = false
        } else {
          newTodos[todoIndex].completed = true
        };
        saveTodos(newTodos);
      };

      const editTodo = (id, newText) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].text = newText;
        saveTodos(newTodos);
      };

      const addTodo = (text) => {
        const id = newTodoId(todos);
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
          id,
        })
        saveTodos(newTodos);
      };
    
      const deleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

      const state = {
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
      };
      
      const stateUpdaters = {
        completeTodo,
        setSearchValue,
        addTodo,
        editTodo,
        deleteTodo,
        sincronizeTodos,
      };

      return {state, stateUpdaters}
}

const newTodoId = (todoList) => {
  if (!todoList.length) {
    return 1;
  };
  const idList = todoList.map(todo => todo.id);
  const newMax = Math.max(...idList);
  return newMax + 1;
};

export { useTodos };