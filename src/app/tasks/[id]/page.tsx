"use client"
import { Task } from "../../interfaces/Task"
import { getTasks, updateTask } from '../../data';
import { IoArrowBackSharp } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import './style.css';
import { AddTask } from "@/app/interfaces/AddTask";
import { useRouter } from 'next/navigation';
import { updateTask as data } from "@/app/data";



export default ({params} : {params: any}) => {

    const id: number = parseInt(params.id);
    const task = getTasks().find(task => task.id === id)!;
    const router = useRouter();

    const [disabled, setDisabled] = useState<boolean>(true);
    const [formData, setFormData] = useState<AddTask>({
        name: task.name,
        description: task.description
    })

    
    function handleOnEditMode(){
        setDisabled(!disabled);
    }

    function handleOnChange(e: any){
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleOnSubmit(){
        updateTask(task.id, formData.name, formData.description);
        router.push('/tasks');
    }

    return (
        <>
        {disabled ? (
           <div className="edit-wrapper">
            <div className="edit-container">
                <div className="edit-header">
                    <Link href={'/tasks'}><span className="text-7xl"><IoArrowBackSharp /> </span> </Link> 
                    <button className="text-7xl" onClick={handleOnEditMode}><CiEdit /></button>
                </div>
                <div className="edit-content">
                    <h1 className="edit-title"> {task?.name} </h1>
                    <textarea disabled className="edit-desc">{task?.description}</textarea>
                    <p className="date-el">Created at: {task?.createdAt.toDateString()}</p>
                </div>        
            </div>
            </div>
        ) : (
            <div className="edit-wrapper">
            <div className="edit-container">
                <div className="edit-header">
                    <Link href={'/tasks'}><span className="text-7xl"><IoArrowBackSharp /> </span> </Link> 
                    <button className="text-7xl" onClick={handleOnEditMode}><CiEdit /></button>
                </div>
                <div className="edit-content">
                    <input type="text" name="name" className="edit-mode" onChange={handleOnChange} value={formData.name} />
                    <textarea className="edit-desc edit-mode" onChange={handleOnChange}>{task?.description}</textarea>
                    <p className="date-el">Created at: {task?.createdAt.toDateString()}</p>
                </div>
                <div className="btn-save-container">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4
                                    border border-gray-400 rounded shadow"
                                    onClick={handleOnSubmit}>
                        Save Changes
                    </button>
                </div>
            </div>
            </div>
        )}
        </>
    );
}
