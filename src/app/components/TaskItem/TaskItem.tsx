"use client"
import { Task } from "@/app/interfaces/Task";
import './TaskItem.css';
import { MdDelete } from "react-icons/md"; // <MdDelete />
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";




export default function TaskItem({ task, onChecked, onDelete }: { task: Task, onChecked: any, onDelete: any }) {


    const router = useRouter();

    const redirectToTask = (taskId: number) => {
        router.push(`/tasks/${taskId}`);
    };

    function handleOnChecked(e: any) {
        onChecked(task.id);
        e.stopPropagation();
    }

    function handleOnDelete(e: any) {
        onDelete(task.id);
        e.stopPropagation();
    }

    function handleOnUpdate(e : any){
        router.push(`/tasks/${task.id}?editMode=true`);
    }


    return (
        <li className={task.checked ? 'task-el task-el-done' : 'task-el'}
            onClick={() => redirectToTask(task.id)}>
            <div>
                <input type="checkbox" checked={task.checked ? true : false}
                className="radio-el" onClick={(e) => handleOnChecked(e)}></input>
                <span className={task.checked ? 'task-name done truncate-el' : 'task-name ongoing truncate-el'}>
                    {task.name}
                </span>
            </div>
            <div className="actions">
                <div className="action-btn" onClick={(e) => handleOnUpdate(e)}><FaEdit /></div>
                <div className="action-btn trash" onClick={(e) => handleOnDelete(e)}><MdDelete /></div>
            </div>
        </li>

    );
}

