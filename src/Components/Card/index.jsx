import React from 'react'
import "./index.scss"

function Card({text,todos,setTodos,id}) {
  return (
    <div className="card">
        <p className='card_text'>{text}</p>
        <span className='card_close' onClick={()=>{setTodos(todos.filter((e,i)=>i !== id))}}>&#x2716;</span>
    </div>
  )
}

export default Card