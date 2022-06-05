import React from "react";
import './TodoList.css';


// {todos} = props.todos
const TodoList = ({ todos, onDeleteTodo }) => (
    <ul className="TodoList">
        <h1 className="">Заголовок</h1>
        {todos.map(({ id, text }) => (
            <li key={id} className="TodoList__item">
                <p className="TodoList__text">{text}</p>
                <button onClick={() =>onDeleteTodo(id)}>Удалить</button>
            </li>
        ))}
    </ul>
); 

export default TodoList;