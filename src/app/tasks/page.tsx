"use client"
import Link from "next/link";
import { Task } from "../interfaces/Task";
import { setChecked, getTasks, deleteTask } from "../data";
import './style.css';
import TaskItem from "../components/TaskItem/TaskItem";
import dynamic from "next/dynamic";
import { useState } from "react";



export default function Home() {

  const [tasks, setTasks] = useState(getTasks());

  function handleOnChecked(id: number){
    setChecked(id);
    setTasks([...getTasks()]);

      // setTasks(tasks.map((task) => {
      //   if(task.id === id){
      //     return {
      //       ...task,
      //       checked: !task.checked
      //     }
      //   }
      //   return task;
      // }))
  }

  function handleOnDelete(id: number){
    setTasks(deleteTask(id));
  }

  const taskItems = tasks.map(task => (
      <TaskItem  key={task.id}
                 task={task}
                 onChecked={handleOnChecked}
                 onDelete={handleOnDelete}></TaskItem>
  ))


  return (
    <div className="wrapper">
        <div className="container">
          <div className="title-wrapper">
            <h1 className="title"><span className="first-part">To</span><span className="second-part">Dos</span></h1>
          </div>
          <Link href="/new">
               <button className="new-btn">ADD NEW TASK +</button>
          </Link>

          <div className="header">
            <label>Tasks</label><label>Actions</label>
          </div>
              
            <ul className="task-container">
                {taskItems}
            </ul>
        </div>
    </div>
  );
}
