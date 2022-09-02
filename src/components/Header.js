import React from 'react'
import {GrPowerReset} from "react-icons/gr"

const Header = ({handleDeleteAllTodos,handleToggleDarkMode}) => {
    return (
        <div className="header">
             {/*the heading of our notes app*/}
        <h1><span style={{color:"#327ffa"}}>React</span> TODO</h1>
         {/*this is our toggle button 
        using this button we can change the background theme for our application*/}
        <button onClick={()=>handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)} className="save">Toggle Mode</button>
        <div className='reset-section' onClick={handleDeleteAllTodos}> <p><b>Reset</b></p> <GrPowerReset size={30}/> </div>
        </div>
    )
}

export default Header
