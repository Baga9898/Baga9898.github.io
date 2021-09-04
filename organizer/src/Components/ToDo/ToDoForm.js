import React, {useState} from "react";

import "./ToDoBlock.css";

export default function ToDoForm({addTask}) {
    const [userInput, setUserInput] = useState("")

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return(
        <form className="toDoBlock__form" onSubmit={handleSubmit}>
            <input className="toDoBlick__form_input"
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Enter new task..."
            />
            <button className="toDoBlick__form_button">Add</button>
        </form>
    );

}