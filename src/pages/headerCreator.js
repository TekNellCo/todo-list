import {headerContainer, tasks, list} from '../index.js';



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
    list.innerHTML =""
    for(let i=0; i< tasks.length; i++){
        let notetab = document.createElement('div');
        let p = document.createElement('p');
        let div = document.createElement('div');
        let detailBtn = document.createElement('button');
        let checkBox = document.createElement('input');

        detailBtn.textContent = "Details";
        p.textContent = `${tasks[i].title}`

        notetab.className = "notetab";

        checkBox.setAttribute("type","checkbox")

        list.append(notetab);
        notetab.append(p);
        notetab.append(div);
        div.append(detailBtn);
        div.append(checkBox);


}
}


