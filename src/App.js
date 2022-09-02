import React, { useState,useEffect } from 'react'
import TodosList from './components/TodosList'
import {nanoid} from 'nanoid'
import Search from './components/Search';
import Header from './components/Header';

function App() {
{/*here we are adding three dummy Todos in our useState hooks for Todos*/}
  const [notes,setNotes] = useState([
    {
    id: nanoid(),
    text:"This is my first todo",
    date:"03/11/2022"
  },
  {
    id: nanoid(),
    text:"This is my second todo",
    date:"03/11/2022"
  },
  {
    id: nanoid(),
    text:"This is my third todo",
    date:"03/11/2022"
  },
 
]);
{/*this are the staes for searching text and toggle mode*/}

const [searchNote,setSearchNote] = useState('');
const [darkMode,setDarkMode] = useState(false)

{/*to store or save the data in local storage even after closing the tab*/}
useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
  if(savedNotes){
    setNotes(savedNotes)

  }
},[])
{/*this is for saving the app data in local storage*/}
useEffect(()=>{
  localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
},[notes])
{/*this function is for adding new note*/}
const addTodo = (text) =>{
  
  const date = new Date();
  const newTodo = {
    id:nanoid(),
    text : text,
    date : date.toLocaleDateString()
  }
  const newNotes = [...notes,newTodo]
  setNotes(newNotes)
  newNotes.reverse();
}
const deletingAllTodos = () =>{
  setNotes([]);
}
{/*this function is for deleting notes in note app with a id*/}
const deletingTodo = (id) =>{
 const newNotes = notes.filter((note)=> note.id!==id);
const nt =  notes.filter((note)=> note.id===id)
 setNotes([...newNotes,...nt])


}
  return (
  
    <div className={`${darkMode && 'dark-mode'}`}>
          <div className="container">
      <Header handleDeleteAllTodos={deletingAllTodos} handleToggleDarkMode={setDarkMode}/>

      <Search handleSearch={setSearchNote}/>
      
      <TodosList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchNote))} handleAddTodo={addTodo} handleDelete={deletingTodo}/>

    </div>
    </div>

  )
}

export default App
