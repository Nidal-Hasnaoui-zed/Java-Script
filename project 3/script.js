let password = document.getElementById('password');

password.addEventListener('input', function(){
    let password_value = password.value ; 
    let password_len = password_value.length ;

    password_msg = ''
    if(password_len < 5){
        password_msg = ''
    } else if(password_len >= 5){
        password_msg = 'weak'; 
    } else if(password_len >= 10){
        password_msg = 'mid'; 
    }else{
        password_msg = 'strong';
    }
})