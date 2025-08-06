let task = document.getElementById('input-box') ;
let container = document.getElementById('list-container'); 

function addTask(){
    if(task.value.trim() === ''){
        alert('plz enter a task !')
        return
    }else{
        let newItem = document.createElement('li'); 
        newItem.textContent = task.value ; 

        container.appendChild(newItem);
    }
}
