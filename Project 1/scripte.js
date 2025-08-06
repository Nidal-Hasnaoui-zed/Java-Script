let task = document.getElementById('input-box');
let container = document.getElementById('list-container');

function addTask(){
    if(task.value.trim() === ''){
        alert('plz enter an task !'); 
    }else{
        let new_item = document.createElement('li'); 
        new_item.textContent = task.value ; 
        container.appendChild(new_item);
    }
    task.value = '';
}