let password = document.getElementById('password');
let strength = document.getElementById('strength'); 
let message  = document.getElementById('message');
let btn = document.getElementById('button'); 
password.addEventListener('input', function(){
    let password_value = password.value ; 
    let password_len = password_value.length ;

    pwd_msg = ''
    if(password_len === 0){
        pwd_msg = ''
    } else if(password_len < 5){
        pwd_msg = 'weak'; 
    } else if(password_len < 10){
        pwd_msg = 'mid'; 
    }else{
        pwd_msg = 'strong';
    }
    strength.textContent = pwd_msg ; 
    message.style.display = 'block';
})

btn.addEventListener('click', function(){
    let pwd_type = password.getAttribute('type'); 
    if(pwd_type === 'password'){
        password.setAttribute('type','text'); 
    }else{
        password.setAttribute('type','password'); 
    }
})