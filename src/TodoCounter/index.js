import React from "react";
import "./TodoCounter.css";

function TodoCounter({completedTodos, totalTodos}) {


    return (
        <div className="CounterMain"> 
            <h1>Your tasks</h1>
            <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
        </div> 
    )
}

export {TodoCounter}