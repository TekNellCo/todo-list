import { addTaskForm } from "./pages/addTaskPage";




export const mainContainer = document.querySelector('.maincontainer');
const addTaskBtn =document.querySelector('.add');



addTaskBtn.addEventListener('click',()=>{
    addTaskForm();
})


