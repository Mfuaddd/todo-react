import { useState } from 'react';
import './App.css';
import Card from './Components/Card';


function App() {
  const [todos,setTodos]=useState([])
  const [todo,setTodo]=useState("")
  return (
    <>
      <form action="" onSubmit={(e)=>{
        setTodos([...todos,todo])
        e.preventDefault()
        setTodo("")
      }}>
        <input type="text"  onChange={(e)=>setTodo(e.target.value)} value={todo} />
        <input type="submit" />
      </form>
      <div className="card_wrapper">
        {todos.map((e,i)=>{
          return <Card text={e} todos = {todos}  setTodos = {setTodos} id = {i} key={i}/>
        })}
      </div>
    </>
  );
}

export default App;
