import React from "react";
import "./TodoCounter.css";

function TodoCounter( {total, completed} ) {
    return (
        <div className="CounterMain"> 
            <h1>Your tasks</h1>
            <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
        </div> 
    )
}

export {TodoCounter}