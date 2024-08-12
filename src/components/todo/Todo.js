import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AddTodo} from '../../redux/Reducer/TodoList';
function Todo() {



    const [overAlls,setOverAlls]=useState([]);
    const dispatch=useDispatch();
    const state=useSelector((state)=>state?.todo?.TodoData);


    const addData=()=>{
        const overAll={
            name:`kalai`,
            age:20,
        }
       dispatch(AddTodo(overAll))
       setOverAlls([...overAlls,overAll])
    }
  return (
    <div>Todo

        <button onClick={addData}>Add+</button>

        <div>
            {state?.map((item,index)=>{
                return(
                    <div key={index}>
                        {item?.id}
                        <div>
                            {item?.name}
                        </div>
                        </div>
                )
            })}
        </div>
    </div>
  )
}

export default Todo