let container = document.getElementById('main'); 

function Add_note(){
    let not = document.createElement('div'); 
    not.classList.add('note'); 
    not.innerHTML = `
        <div class="tool">
                <i class="fas fa-save"></i> 
                <i class="fas fa-trash trash"></i> 
            </div>
            <textarea></textarea>
    `; 
    container.appendChild(not); 
    let delet = not.querySelector('.trash'); 
    delet.addEventListener('click', function(){
        not.remove();
    })

}