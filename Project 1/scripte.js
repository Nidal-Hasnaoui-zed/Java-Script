let task = document.getElementById('input-box');
let container = document.getElementById('list-container');

function addTask(){
    if(task.value.trim() === ''){
        alert('plz enter an task !'); 
    }else{
        let new_item = document.createElement('li'); 
        new_item.textContent = task.value ; 
        container.appendChild(new_item);
        let span = document.createElement('span'); 
        span.innerHTML = '\u00d7'; 
        new_item.appendChild(span);
    }
    task.value = '';

    container.addEventListener('click', function(e){
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle('checked'); 
        }else if (e.target.tagName === 'SPAN'){
            e.target.parentElement.remove(); 
        }
    })    
}