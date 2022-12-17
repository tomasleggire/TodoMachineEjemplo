import React from "react";
import { useNavigate } from "react-router-dom";
import "./TodoForm.css";

function TodoForm(props) {

    const navigate = useNavigate();

    const [newTodoValue, setNewTodoValue] = React.useState("");

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        navigate('/');
    };
    const onSumbit = (event) => {
        event.preventDefault();
        navigate('/');
        props.sumbitEvent(newTodoValue);
    };

    return (
        <form onSubmit={onSumbit}>
            <label>{props.label}</label>
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
                >{props.sumbitText}</button>
            </div>
        </form>
    )
}

export {TodoForm};