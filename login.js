function logar(){
    var login_email = document.getElementById('login_email').value;
    var password = document.getElementById('password').value;

    if(login_email == "a" && password == "a"){
        alert('Login usuario: ' + login_email);
    }else{
        alert('Login e senha invalido!');
    }

}