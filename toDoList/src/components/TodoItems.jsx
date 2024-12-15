import React from 'react'
import tick_icon from '../assets/tick.png'
import delete_icon from '../assets/delete.png'
import nontick_icon from '../assets/not_tick.png'

const TodoItems = (props) => {
  return (
    <div onClick={()=>{props.toogle(props.id)}}className='flex items-center my-3 gap-2'>
        <div   className='flex flex-1 items-center cursor-pointer '>
            <img src={props.status?tick_icon:nontick_icon} className='w-7'></img>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-600 italic ${props.status? "line-through": ""}`}>
                {props.text}
             </p>
        </div>
        <img onClick={()=>{props.deleteToDo(props.id)}}src={delete_icon} className='w-3.5 cursor-pointer'></img>
    </div>
  )
}

export default TodoItems
