import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
import {FcApproval} from "react-icons/fc"
{/*this is our note card component
here am using id,text,date,handleDeleteNote as props which have been defined in App.js*/}

function Todo({id,text,date,handleDelete}) {
    return (
        <div className="note">
        {/*This part will contain the main Todo's text part*/}
            <span>{text}</span>
            {/*in the footer part of the Todo*/}
            
            <div className="note-footer">
            {/*it will store date on which the user is going to create the todo*/} 
                <small>{date}</small>
                {/*this is for deleting the todo using each todo's unique id as parameter
                so we have passed handleDeleteTodo function as it's onClick event*/}
                <FcApproval  size={30} onClick={()=>handleDelete(id)} className="delete-icon"  />
           
            </div>
            
        </div>
    )
}

export default Todo
