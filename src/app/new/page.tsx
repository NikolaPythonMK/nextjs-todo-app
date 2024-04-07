
"use client"
import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";
import { addTask } from "../data";
import './addTask.css'
import { useState } from "react";
import { AddTask } from "../interfaces/AddTask";
import { useRouter } from 'next/navigation';

export default () => {

    const [formData, setFormData] = useState<AddTask>({
        name: '',
        description: ''
    })
    const router = useRouter();

    function handleOnSubmit(e: any){
        e.preventDefault();
        addTask(formData);
        router.push('/tasks');
    }

    function handleOnChange(e: any){
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <div>
            <Link href={'/tasks'}><span className="text-7xl"><IoArrowBackSharp /> </span> </Link>
            <div className="wrapper">
                <form onSubmit={handleOnSubmit} className="container">
                    <div className="input-group">
                        <input type="text" placeholder="Enter task name..." className="input"
                        onChange={handleOnChange} name="name"></input>
                    </div>
                    <div className='input-group'>
                        <textarea placeholder="Enter description..." className="input"
                        onChange={handleOnChange} name="description"></textarea>
                    </div>
                    <div className='btn-group'>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4
                                    border border-gray-400 rounded shadow"
                                    >
                        Save
                    </button>
                    </div>
                </form>
            </div>
        </div>

    );
}