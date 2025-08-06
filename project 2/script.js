
let container = document.getElementById('main');

function Add_note(){
    let div = document.createElement('div'); 
    div.classList.add('note');
    div.innerHTML = `
        <div class="tool">
                <i class="fas fa-save"></i> 
                <i class="fas fa-trash trash"></i> 
            </div>
            <textarea></textarea>
    `; 
    container.appendChild(div);
    const trash = div.querySelector(".trash");
    trash.addEventListener("click",()=>{

        div.remove();

    });
}