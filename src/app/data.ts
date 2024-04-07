import { AddTask } from "./interfaces/AddTask";
import { Task } from "./interfaces/Task" 

let tasks: Task[] = [
  {
    id: 1,
    name: 'Complete homework assignment',
    description: 'Finish the math problems and write an essay for English class',
    createdAt: new Date(),
    checked: false
  },
  {
    id: 2,
    name: 'Buy groceries',
    description: 'Get eggs, milk, bread, and vegetables from the supermarket.',
    createdAt: new Date(),
    checked: false
  },
  {
    id: 3,
    name: 'Finish reading book',
    description: 'Read the last three chapters of "To Kill a Mockingbird."',
    createdAt: new Date(),
    checked: false
  },
  {
    id: 4,
    name: 'Go for a run',
    description: 'Jog for 30 minutes around the park to get some exercise.',
    createdAt: new Date(),
    checked: false
  },
  {
    id: 5,
    name: 'Pay utility bills',
    description: 'Log in to the online portal and submit payments for electricity, water, and internet bills.',
    createdAt: new Date(),
    checked: false
  },
  {
    id: 6,
    name: 'Practice guitar',
    description: 'Dedicate 30 minutes to practicing chords and scales to improve guitar skills.',
    createdAt: new Date(),
    checked: false}
  ]


export function getTasks(){
  return tasks;
}  

export function updateTask(id: number, name: string, description: string){
    const task = tasks.find(task => task.id === id)!;
    task.name = name;
    task.description = description;
}

export function deleteTask(id: number){
  tasks = tasks.filter(task => task.id !== id);
  return tasks;
}

export function addTask(addTask: AddTask){
  tasks.push({
    id: tasks.length + 1,
    name: addTask.name,
    description: addTask.description,
    createdAt: new Date(),
    checked: false
  });
}

export function setChecked(id: number){
  const task = tasks.find(task => task.id === id)!;
  task.checked = !task.checked;
}


  
  