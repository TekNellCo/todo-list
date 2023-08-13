import { mainContainer, tasks } from "../index.js";
import '../styles/popup.css';
import { headerCreator } from "./headerCreator.js";




///////////BUILDS TASK FORM THEN PUSHES VALUE INTO TASK CREATOR OR CLOSES WINDOW, ALSO RESETS INPUTS ON CONFIRM
export function addTaskForm(){
    let popUp = document.createElement('div');
        let popUpInput = document.createElement('div');
            let selection = document.createElement('select');
                let option = document.createElement('option');
            let inputs = document.createElement('div');
                let one = document.createElement('div');
                    let inputOneA = document.createElement('input');
                    let button = document.createElement('button');
                let two = document.createElement('div');
                    let inputTwoA = document.createElement('input');
                    let inputTwoB = document.createElement('input');
                let three = document.createElement('div');
                    let inputThreeA = document.createElement('input');
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

inputTwoB.setAttribute('type','date');
divAInput.setAttribute('type','radio');
divBInput.setAttribute('type','radio');
divCInput.setAttribute('type','radio');

option.disabled = "true";

inputOneA.placeholder = "Header";
inputTwoA.placeholder = "Title";
inputThreeA.placeholder = "Notes";

popUp.className = "popup";
popUpInput.className = "popupinput";
selection.className ="selection";
inputs.className = "inputs";
inputOneA.className = "text";
inputTwoA.className = "text";
inputThreeA.className = "text";
inputThreeA.className = "notes";
one.className = "one";
two.className = "two";
radios.className = "radios";
inputTwoB.className = "date";
confirmBtn.className = "confirm";

option.textContent = "Add to current header";
button.textContent = "Delete/Close";
p.textContent = "Priority";
divAlabel.textContent = "Low";
divBlabel.textContent = "Med";
divCLabel.textContent = "High";
confirmBtn.textContent = "Confirm";

mainContainer.append(popUp);
popUp.append(popUpInput);
popUpInput.append(inputs);
popUpInput.append(selection);
selection.append(option);
inputs.append(one);
one.append(inputOneA);
one.append(button);
inputs.append(two);
two.append(inputTwoA);
two.append(inputTwoB);
inputs.append(three);
three.append(inputThreeA);
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

confirmBtn.addEventListener('click',()=>{
    let header = inputOneA.value;
    let title = inputTwoA.value;
    let notes = inputThreeA.value;
    let date = inputTwoB.value;
    let priority = "med";
    taskCreator(header,title,notes,date,priority)
    inputOneA.value = ""
    inputTwoA.value = ""
    inputThreeA.value = ""
    inputTwoB.value = ""
})


button.addEventListener('click',()=>{
    popUp.remove();
})
}


////CREATES TASK AND PUSHES IT INTO ARRAY
function taskCreator(header,title,notes,date,priority){
    let task = {
        header,
        title,
        notes,
        date,
        priority,
    }
    tasks.push(task) 
    headerCreator(task)

}