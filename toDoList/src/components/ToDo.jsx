import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'
const ToDo = () => {
      const [toDoList, setToDoList] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);
      const inputRef = useRef();

      const add = () =>{
          const inputText = inputRef.current.value.trim(); // trim removes space from begin and end
          if(inputText===""){
            return null;
          }
          const newToDo = {
                id: Date.now(),
                text : inputText,
                status: false,
          }  
          setToDoList((prev)=>[...prev, newToDo])//spread operator
          inputRef.current.value="";
    }

      const deleteToDo = (id) =>{
         setToDoList((prevToDos)=>{
          return prevToDos.filter((todo)=> todo.id !== id);
         })
      }

      const toggle = (id) =>{
          setToDoList((prevToDos)=>{
            return prevToDos.map((todo)=>{
              if(todo.id===id){
                return {...todo, status:!todo.status}
              }
              return todo;
            })
          })
      }

      useEffect(()=>{localStorage.setItem("todos", JSON.stringify(toDoList))},[toDoList])


  return (
    <div className='bg-white place-self-center  w-10/12 max-w-md flex flex-col p-7 min-h-[650px] rounded-xl' >
       {/* --------------tittle------------- */}
       <div className='flex items-center mt-7 gap-2'>
          <img className='w-8'  src={todo_icon}  alt='' />
          <h1 className='text-3xl font-semibold'>To-Do List</h1>
       </div>

       {/* ----------input box--------- */}
       <div className='flex items-center my-7 bg-gray-200 rounded-full'>
          <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type='text' placeholder='Add Your Task'></input>
          <button onClick={add }className='border-none rounded-full bg-green-600 w-32 h-14 text-white text-lg font-medium cursor-pointer' >ADD +</button>
       </div>

         {/* ----------to do lists--------- */}
          <div>

              {toDoList.map((items, index)=>{
                  return(<TodoItems key={index} text={items.text} id={items.id} status={items.status} deleteToDo = {deleteToDo} toogle = {toggle}/> )
              })}
          </div>

    </div>
  )
}

export default ToDo
