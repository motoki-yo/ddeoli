/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$("#password").keyup(function(){
    let input = $(this).val();
    let regex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
        
    let length = "", letters = "", number = "", special = "";
        
    //verifica tamanho da senha
    if(input.length >= 8)
        length = "";
    else
        length = "- 8 characters <br>";
    
    //verifica se contem maiúsculas e minúsculas
    if(/^(?=.*?[A-Z])(?=.*?[a-z]).{0,}$/.test(input))
        letters = "";
    else
        letters = "- uppercase & lowercase letters <br>";

    //verifica se contem numero
    if(/^(?=.*?[0-9]).{0,}$/.test(input))
        number = "";
    else
        number = "- 1 number <br>";

    //verifica se contem carácter especial
    if(/^(?=.*?[#?!@$%^&*-]).{0,}$/.test(input))
        special = "";
    else
        special = "- 1 special character";

    //verifica se a senha contem todas as restricoes
    if(regex.test(input)) {
        document.getElementById('passwordContain').innerHTML = "";
    }else {
        document.getElementById('passwordContain').innerHTML = "your password must contain:<br>" + length + letters + number + special;
    }
});

//botao mostrar senha
let container = document.querySelector(".col-login"); 
let input = document.querySelector(".inputPassword"); 
let icon = document.querySelector(".showPassword");

icon.addEventListener('click', function() { container.classList.toggle('visible'); 
  if (container.classList.contains ('visible')) { 
    icon.src = 'img/eye-off.svg'; 
    input.type = 'text';

  }else {

    icon.src = 'img/eye.svg'; 
    input.type = 'password';
  }
});

//codigo temporario
//enviar um alert quando o usuario entrar no sistema
let buttonLogin = document.getElementById('login');
buttonLogin.addEventListener("click",  function(){
    alert("User Account");
});

//editar cadastro
function edit() {
    document.getElementById('buttonSave').style.display = "inline";
    document.getElementById('firstName').disabled = false;
    document.getElementById('lastName').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('phone').disabled = false;
    document.getElementById('password').disabled = false;
    document.getElementById('showPass').style.display = "inline-block";
}

function save() {
    document.getElementById('buttonSave').style.display = "none";
    document.getElementById('firstName').disabled = true;
    document.getElementById('lastName').disabled = true;
    document.getElementById('email').disabled = true;
    document.getElementById('phone').disabled = true;
    document.getElementById('password').disabled = true;
    document.getElementById('showPass').style.display = "none";
}

function editInf(){
    alert("Um menu oculto na lateral irá aparecer para editar ou adicionar um novo endereço/cartão de crédito");
}

  
