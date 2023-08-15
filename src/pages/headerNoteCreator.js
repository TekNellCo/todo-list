import {headerContainer, tasks, list} from '../index.js';
import { detailsEditor } from './detailContainer.js';


////////    CREATES A HEADER ON SIDEBAR AND ADDS DATASET NUMBER TO IT
export function headerCreator(task){
    let header = document.createElement('div');
    header.className = "header";
    header.textContent = task.header;
    header.dataset.num = tasks.length - 1;
    headerContainer.append(header);


    header.addEventListener('click',(e)=>{
        let headerNum = e.target.dataset.num ;
        openList(headerNum);
        // console.log(headerNum)
    })
}


///////RUNS A LOOP ON THE SELECTED HEADERS SUB ARRAY AND POPULATES A LIST
export function openList(headerNum){
    list.innerHTML =""
    for(let i=0; i< tasks[headerNum].length; i++){
        let notetab = document.createElement('div');
        let p = document.createElement('p');
        let div = document.createElement('div');
        let detailBtn = document.createElement('button');
        let checkBox = document.createElement('input');

        detailBtn.dataset.num = i;
        detailBtn.textContent = "Details";
        p.textContent = `${tasks[headerNum][i].title}`

        notetab.className = "notetab";

        checkBox.setAttribute("type","checkbox")

        list.append(notetab);
        notetab.append(p);
        notetab.append(div);
        div.append(detailBtn);
        div.append(checkBox);

checkBox.addEventListener('click',()=>{
    if(checkBox.checked === true){
        notetab.style.backgroundColor = "green"
    }else if(checkBox.checked === false){
        notetab.style.backgroundColor = ""
    }
})



///////////////////OPENS DETAIL BOX
detailBtn.addEventListener('click',(e)=>{
    let subArray = e.target.dataset.num
    detailsEditor(headerNum,subArray,tasks[headerNum][subArray])
})


}
}


