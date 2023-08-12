import { addTaskForm } from "./pages/addTaskPage";



////////ARRAY FOR ALL THE TASKS IN THE PROJECT
export let tasks = [];


////////MAIN DIV THAT TASK PAGE APPENDS TO
export const mainContainer = document.querySelector('.maincontainer');

//////////DIV THAT HEADERS APPEND TO
export const headerContainer = document.querySelector('.left');

//////////ADD BUTTON THAT BRINGS UP TASKFORM
const addTaskBtn =document.querySelector('.add');
addTaskBtn.addEventListener('click',()=>{
    addTaskForm();
})


