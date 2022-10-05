import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";
import Input from "./Input";

export interface ITodo {
    ID: string,
    Text: string,
    isCompleted: boolean
}

const Todo = () => {

    const [TodoList, setTodoList] = useState<ITodo[]>(
        [{ ID: uuidv4(), Text: '123', isCompleted: false },
        { ID: uuidv4(), Text: 'todo1', isCompleted: false }]
    );

    const handleToggle = (id: string) => {
        const newTodos: ITodo[] = TodoList.map(todo => {
            if (todo.ID == id) {
                return { ...todo, isCompleted: !todo.isCompleted }
            }
            return todo;
        });
        setTodoList(newTodos);
    };
    const updateTodo = (id: string, text: string) => {
        const newTodos: ITodo[] = TodoList.map(todo => {
            if (todo.ID == id) {
                return { ...todo, Text: text }
            }
            return todo;
        });
        setTodoList(newTodos);
    };

    const addTodo = (text: string) => {
        const newTodos: ITodo[] = [...TodoList];
        newTodos.push({ ID: uuidv4(), Text: text, isCompleted: false });
        setTodoList(newTodos);
    }

    const deleteTodo = (id: string) => {
        setTodoList(TodoList.filter(todo => todo.ID != id));
    }

    const todoItems = TodoList.map(todo => (
        <TodoItem todo={todo} handleToggle={handleToggle} deleteTodo={deleteTodo} updateTodo={updateTodo} key={todo.ID} />
    ))

    return (
        <div className="container">
            <div className="TodoList">
                <h1>Todo List</h1>
                <Input addTodo={addTodo}/>
                <ul>
                    {todoItems}
                </ul>
            </div>
        </div>)
}

export default Todo;