import React from 'react'
import { useTodo } from '../../../contexts/TodoContext'

function Item({ todo }) {

    const {onDestroy, toggleTodo} = useTodo()

    return (
        <li className={todo.completed ? 'completed' : ''} key={todo.id}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                />
                <label>{todo.text}</label>
                <button className="destroy" onClick={() => onDestroy(todo.id)}></button>
            </div>
        </li>
    )
}

export default Item
