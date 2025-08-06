

function addTask(){
    let task = document.getElementById('input-box').value ;
    let container = document.getElementById('list-container'); 

    if(task.trim() === ''){
        alert('plz enter a task !')
        return
    }else{
        let newItem = document.createElement('li'); 
        newItem.textContent = task  ; 

        container.appendChild(newItem);
    }

}