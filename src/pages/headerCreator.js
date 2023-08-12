import {headerContainer, tasks} from '../index.js';


export function headerCreator(task){
    let header = document.createElement('div');
    header.className = "header";
    header.textContent = task.header;
    header.dataset.num = tasks.length - 1;
    headerContainer.append(header);


    header.addEventListener('click',(e)=>{
        let headerNum = e.target.dataset.num ;
        openList(headerNum);
    })
}


function openList(headerNum){
    
}