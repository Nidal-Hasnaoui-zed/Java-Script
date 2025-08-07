let password = document.getElementById('password'); 
let strength = document.getElementById('strength'); 
let message = document.getElementById('message');
let btn = document.getElementById('submit'); 

password.addEventListener('input', function(){
    let password_value = password.value ; 
    let password_len = password_value.length;

    strength_vlaue = ''; 

    if(password_len === 0){
        strength_vlaue = ''
    }else if(password_len < 5){
        strength_vlaue = 'Weak'; 
    }else if(password_len < 10){
        strength_vlaue = 'Mid';
    }else{
        strength_vlaue = 'Strong';
    }

    strength.textContent = strength_vlaue; 
    message.style.display = 'block';
})

btn.addEventListener('click', function(){
    let password_type = password.getAttribute('type');
    if(password_type === 'password'){
        password.setAttribute('type','text')
    }else{
        password.setAttribute('type','password');
    }
})