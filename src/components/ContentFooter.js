import React from 'react'
import { useTodo } from '../contexts/TodoContext'

function ContentFooter() {
    const { todos, filter, setTodos, setFilter } = useTodo();

    const clearCompleted = () => {
        const cloned_todos = [...todos];
        const new_todos = cloned_todos.filter((todo) => !todo.completed);

        setTodos(new_todos)
    }
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{todos.length}</strong>
                <span style={{ marginLeft: 6 }}>{todos.length > 1 ? 'items left' : 'item left'}</span>
            </span>

            <ul className="filters">
                <li>
                    <a href="#/"
                        className={filter === 'all' ? "selected" : ''}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </a>
                </li>
                <li>
                    <a href="#/"
                        className={filter === 'active' ? "selected" : ''}
                        onClick={() => setFilter('active')}
                    >
                        Active
                    </a>
                </li>
                <li>
                    <a href="#/"
                        className={filter === 'completed' ? "selected" : ''}
                        onClick={() => setFilter('completed')}
                    >
                        Completed
                    </a>
                </li>
            </ul>

            <button onClick={clearCompleted } className="clear-completed">
                Clear completed
            </button>
        </footer>
    )
}

export default ContentFooter
