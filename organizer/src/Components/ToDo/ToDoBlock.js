import React, {useState} from "react";

import "../../index.css";
import "./ToDoBlock.css";

import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

export default function ToDoBlock() {
    const [todos, setTodos] = useState([])

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2,9),
                task: userInput,
                complete: false
            }

            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) => todo.id === id ? {...todo, complete: !todo.complete} : {...todo})
        ])
    }

    return (
        <div className="wrapper toDoBlockWrapper">
            <h1>Tasks</h1>
            <ToDoForm addTask={addTask}/>
            <div className="toDoBlock__item_wrapper">
                {todos.map((todo) => {
                    return (
                        <ToDoItem
                        todo={todo} 
                        key={todo.id}
                        toggleTask={handleToggle}
                        removeTask={removeTask}
                        />
                    );
                })}
            </div>
        </div>
    );
}
