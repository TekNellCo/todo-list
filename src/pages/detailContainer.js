import { tasks, mainContainer } from "../index.js";
import { openList  } from "./headerNoteCreator.js";
import '../styles/popup.css';








/////////////CREATES A POPUP OF DETAILS
export function detailsEditor(headerNum,subArray,taskInfo){
    // console.log(arrayNum)
    // console.log(taskInfo);
    // console.log(arr)
    let popUp = document.createElement('div');
        let popUpInput = document.createElement('div');
            // let selection = document.createElement('select');
            let inputs = document.createElement('div');
                let one = document.createElement('div');
                    let deleteClose = document.createElement('button');
                let two = document.createElement('div');
                    let task = document.createElement('input');
                    let date = document.createElement('input');
                let three = document.createElement('div');
                    let notes = document.createElement('input');
                    let confirmBtn = document.createElement('button')
            let radios = document.createElement('div');
                let p = document.createElement('p');
                let divA = document.createElement('div');
                    let divAlabel = document.createElement('label');
                    let divAInput = document.createElement('input');
                let divB = document.createElement('div');
                    let divBlabel = document.createElement('label');
                    let divBInput = document.createElement('input');
                let divC = document.createElement('div');
                    let divCLabel = document.createElement('label');
                    let divCInput = document.createElement('input');

date.setAttribute('type','date');
divAInput.setAttribute('type','radio');
divBInput.setAttribute('type','radio');
divCInput.setAttribute('type','radio');
divAInput.setAttribute('name','priority');
divBInput.setAttribute('name','priority');
divCInput.setAttribute('name','priority');

divAInput.dataset.priority = "low"
divBInput.dataset.priority = "med"
divCInput.dataset.priority = "high"

let priority = "low"

divAInput.addEventListener('click',()=>{
    priority = "low"
})
divBInput.addEventListener('click',()=>{
    priority = "med"
})
divCInput.addEventListener('click',()=>{
    priority = "high"
})

task.value = taskInfo.title;
notes.value = taskInfo.notes;
date.value = taskInfo.date;

// deleteClose.value = 

// console.log(`[${headerNum}][${subArray}]`);


popUp.className = "popup";
popUpInput.className = "popupinput";
// selection.className ="selection";
inputs.className = "inputs";
task.className = "text";
notes.className = "text";
notes.className = "notes";
one.className = "one";
two.className = "two";
radios.className = "radios";
date.className = "date";
confirmBtn.className = "confirm";

deleteClose.textContent = "Delete";
p.textContent = "Priority";
divAlabel.textContent = "Low";
divBlabel.textContent = "Med";
divCLabel.textContent = "High";
confirmBtn.textContent = "Confirm";

mainContainer.append(popUp);
popUp.append(popUpInput);
popUpInput.append(inputs);
// popUpInput.insertBefore(selection,popUpInput.firstChild)
// popUpInput.prepend(selection);
inputs.append(one);
one.append(deleteClose);
inputs.append(two);
two.append(task);
two.append(date);
inputs.append(three);
three.append(notes);
three.append(confirmBtn);
popUpInput.append(radios);
radios.append(p);
radios.append(divA);
divA.append(divAlabel);
divA.append(divAInput);
radios.append(divB);
divB.append(divBlabel);
divB.append(divBInput);
radios.append(divC);
divC.append(divCLabel);
divC.append(divCInput);


       //////PUSHES INPUT VALUES TO TASK CREATOR ARRAY THEN RUNS FUNCTION FOR POPULATE DROPDOWN
confirmBtn.addEventListener('click',()=>{
    taskMerger(taskInfo.header,task.value,notes.value,date.value,priority);
    openList(headerNum);
    popUp.remove();


    

    // console.log(title)

    //           /////IF DROPDOWN IS DEFAULT.WILL CREATE  NEW HEADER, IF NOT, MERGES TO EXISTING HEADER.
    // taskMerger(selection.value,title,notes,date,priority);
    // optionCreator();
})


         ///////PUSHES VALUES TO EXISTING ARRAY 
function taskMerger(header,title,notes,date,priority){
    let subArrayNew = {
        header,
        title,
        notes,
        date,
        priority,
        done : false
    }
    // if(selection.value !== headerNum){
    //     tasks[selection.value].push(subArrayNew);    
    //     deleteDiv();
    //     delete tasks[headerNum][subArray];
    // }else if(selection.value === headerNum){
    tasks[headerNum][subArray] = subArrayNew;
    // }else{return}
    // console.log(selection.value)
    // console.log(tasks)


}




// /////////////POPULATES DROP-DOWN MENU AND ADDS VALUES TO EACH OPTION
// optionCreator();
// function optionCreator(){
//     selection.innerHTML = "";

//     for(let i = 0; i < tasks.length; i++){
//         let headerSelect = document.createElement('option');
//         headerSelect.textContent = tasks[i][0].header;
//         headerSelect.value = i
//         selection.append(headerSelect);
//         console.log(i);
//     } 

// }
// selection.addEventListener('change',()=>{
//     console.log(selection.value);
//     console.log(tasks);

//     if(selection.value === ""){


//     }
// })
////////////CLOSES THE TASK PAGE
deleteClose.addEventListener('click',()=>{
    tasks[headerNum].splice(subArray,1)
    console.log(tasks)
    openList(headerNum);
    
    popUp.remove();
  




})
}

