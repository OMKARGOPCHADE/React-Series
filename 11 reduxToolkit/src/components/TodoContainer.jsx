import React, {useState} from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';

function TodoContainer() {
    const [input,setInput] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null)

    const startEditing = (id, text)=>{
        setInput(text)
        setIsEditing(true)
        setEditId(id)
    }

    const resetEdit= ()=>{
        setInput("")
        setIsEditing(false)
        setEditId(null)
    }

    return ( 
        <div>
            <AddTodo
             input = {input}
             setInput = {setInput}
             isEditing = {isEditing}
             editId = {editId}
             resetEdit = {resetEdit}
            />
            <Todos onEdit = {startEditing}/>
        </div>
     );
}

export default TodoContainer;