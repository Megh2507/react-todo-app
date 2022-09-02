import React from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'
{/* this component is storing the Todos in a format*/}

const TodosList=({notes,handleAddTodo,handleDelete}) =>{
    return (
        <div className="notes-list">
        {/*here we are going to use .map to make each note card from notes
        and also passing the functions and other states as propas*/}
         <AddTodo handleAddTodo={handleAddTodo}/>
           {notes.map((note)=>
               <Todo id={note.id} text={note.text} date={note.date}
               handleDelete={handleDelete}
               />
           )}
          
        </div>
    )
}

export default TodosList
