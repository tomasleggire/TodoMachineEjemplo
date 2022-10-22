import React, { Children } from "react";
import "./TodoList.css"

function TodoList(props) {
    return (
        <section className="TodoList-container">
            <ul>
                {props.children}
                {props.erro && props.onError()}
                {props.loading && props.onLoading()}

                {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}

                {props.searchedTodos.map(props.render)}
            </ul>
        </section>
    )
}

export {TodoList}