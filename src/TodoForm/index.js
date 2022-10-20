import React from "react";
import "./TodoForm.css";

function TodoForm({addTodo, setOpenModal}) {

    const [newTodoValue, setNewTodoValue] = React.useState("");

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    };
    const onSumbit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);

    };

    return (
        <form onSubmit={onSumbit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
              placeholder="Cortar la cebolla para el almuerzo"
              value={newTodoValue}
              onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                  type="button"
                  className="TodoForm-button TodoForm-button--cancel"
                  onClick={onCancel}
                >Cancelar</button>
                <button
                  type="sumbit"
                  className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm};