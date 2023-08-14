import { addTaskForm } from "./pages/addTaskPage";



// You'll need to loop through your array elements, create a new DOM node for each and append it to your object:

// var select = document.getElementById("selectNumber");
// var options = ["1", "2", "3", "4", "5"];

// for(var i = 0; i < options.length; i++) {
//     var opt = options[i];
//     var el = document.createElement("option");
//     el.textContent = opt;
//     el.value = opt;
//     select.appendChild(el);
// }
// <select id="selectNumber">
//     <option>Choose a number</option>
// </select>






////////ARRAY FOR ALL THE TASKS IN THE PROJECT
export let tasks = [];


////////MAIN DIV THAT TASK PAGE APPENDS TO
export const mainContainer = document.querySelector('.maincontainer');

//////////DIV THAT HEADERS APPEND TO
export const headerContainer = document.querySelector('.left');

////////////DIV THAT LIST APPENDS TO
export const list = document.querySelector('.todo');

//////////ADD BUTTON THAT BRINGS UP TASKFORM
const addTaskBtn =document.querySelector('.add');
addTaskBtn.addEventListener('click',()=>{
    addTaskForm();
})


