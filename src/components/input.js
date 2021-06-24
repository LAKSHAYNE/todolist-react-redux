import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'
import "./input.css"

function Input() {
    const [inputtodo, setinputtodo] = useState("")
    const dispatch = useDispatch()

    const addtodo = ()=>{
        console.log(`added ${inputtodo}`);
        dispatch(saveTodo({
            item:inputtodo,
            done:false,
            id: Date.now()
        }))
        setinputtodo("");
    }

    return (
        <div className="input">
            <input value={inputtodo} onChange={(e)=>setinputtodo(e.target.value)} type="text" />
            <button onClick={addtodo}>Add</button>
        </div>
    )
}

export default Input
