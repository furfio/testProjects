import React, { useState } from "react";
import { ITodo } from "./Todo";
import "./Todo.css";

interface Props {
    todo: ITodo,
    handleToggle: (id: string) => void,
    deleteTodo: (id: string) => void,
    updateTodo: (id: string, text: string) => void,
}

const TodoItem: React.FC<Props> = (props) => {
    const { todo, handleToggle, deleteTodo, updateTodo } = props;
    const [inputValue, setInputValue] = useState(todo.Text);
    const [isEdit, setIsEdit] = useState(false);

    const _handleToggle = (e: any) => {
        handleToggle(e.target.id)
    }

    const _deleteTodo = (e: any) => {
        deleteTodo(e.target.id)
    }

    const changeEdit = () => {
        setIsEdit(!isEdit);
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        updateTodo(todo.ID, inputValue);
        changeEdit();
    }

    const onChange = (e: any) => {
        setInputValue(e.target.value);
    }

    return (
        <div className="Todo">
            {isEdit ?
                <>
                    <form onSubmit={onSubmit}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={onChange}
                            className="todo_edit"
                            autoComplete="off"
                        />
                    </form>
                    <div className="todoButton" onClick={onSubmit}>✔️</div>
                </>
                :
                <>
                    <li
                        id={todo.ID}
                        onClick={_handleToggle}
                        className={todo.isCompleted ? "Todo-task completed" : "Todo-task"}
                    >
                        {todo.Text}
                    </li>
                    <div className="todoButton" id={todo.ID} onClick={changeEdit}>✒️</div>
                    <div className="todoButton" id={todo.ID} onClick={_deleteTodo}>❌</div>
                </>}
        </div>
    );
}

export default TodoItem;