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

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        newItem.appendChild(span);
    }
    task.value = '';
}

container.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
    }else if (event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
    }
})