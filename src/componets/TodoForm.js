import React, { useState } from "react";

export default function TodoForm(props) {
    //state
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value)

    }

    const handlesubmit = (e) => {
        e.preventDefault();
        props.addTask({
            id: Math.floor(Math.random() * 1000000),
            text: input,
            isComplete: false
        })
        setInput('')
    }

    return (
        <form className="todo-form">
            <input type="text" placeholder='Add a todo' onChange={handleChange} className="todo-input" value={input} name="text" />
            <button type="submit" onClick={handlesubmit} className="todo-btn">ADD TODO</button>
        </form>
    );
}