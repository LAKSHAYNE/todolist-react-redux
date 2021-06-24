import React from 'react'
import "./Todoitem.css"
import { Checkbox } from '@material-ui/core';
import { setCheck } from '../features/todoSlice';
import { useDispatch } from 'react-redux';

function Todoitem(props) {
    const dispatch = useDispatch()

    function handleChange(){
        console.log(`called ${props.id}`);
        dispatch(setCheck(props.id))
    }

    return (
        <div className="todoitem">
            <Checkbox
                checked={props.done}
                color="primary"
                onChange={handleChange}
                inputProps={{"aria-label":"secondary checkbox"}}
            />
            <p className={props.done && "todoItem--done"}>{props.name}</p>
        </div>
    )
}

export default Todoitem
