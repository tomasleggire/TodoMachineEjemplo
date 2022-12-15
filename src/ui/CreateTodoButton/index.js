import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    if (props.openModal === false) {
      props.setOpenModal(true)
    } else {
      props.setOpenModal(false)
    }
  }
    return (
        <button 
          className="CreateTodoButton"
          onClick={onClickButton}
        >
          +
          
        </button>
    )
}

export {CreateTodoButton};