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
/*let container = document.querySelector(".col-login"); 
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
});*/

//codigo temporario
//enviar um alert quando o usuario entrar no sistema

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

/*Pop-up para editar produto*/
function deselect(e) {
    $('.pop').slideFadeToggle(function() {
        e.removeClass('selected');
    });    
}
  
$(function() {
    $('.editProd').on('click', function() {
        if($(this).hasClass('selected')) {
            deselect($(this));               
        } else {
            $(this).addClass('selected');
            $('.pop').slideFadeToggle();
        }
        return false;
    });
  
    $('.cancel').on('click', function() {
        deselect($('.editProd'));
        return false;
    });
});
  
$.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};
  
/*image upload*/
function showPreviewOne(event){
    if(event.target.files.length > 0){
        let src = URL.createObjectURL(event.target.files[0]);
        let preview = document.getElementById("file-ip-1-preview");
        preview.src = src;
        preview.style.display = "block";
    } 
}
function myImgRemoveFunctionOne() {
    document.getElementById("file-ip-1-preview").src = "https://i.ibb.co/ZVFsg37/default.png";
}


/*add new products pop-up*/
function deselect1(e) {
    $('.popInsert').slideFadeToggle(function() {
        e.removeClass('selected');
    });    
}
  
$(function() {
    $('#NewProd').on('click', function() {
        if($(this).hasClass('selected')) {
            deselect1($(this));               
        } else {
            $(this).addClass('selected');
            $('.popInsert').slideFadeToggle();
        }
        return false;
    });
  
    $('.cancelInsert').on('click', function() {
        deselect1($('#NewProd'));
        return false;
    });
    
});

/*Edit Adm*/
function deselectEditAdm(e) {
    $('.popEditAdm').slideFadeToggle(function() {
        e.removeClass('selected');
    });    
}

$(function() {
    $('.editAdm').on('click', function() {
        if($(this).hasClass('selected')) {
            deselectEditAdm($(this));               
        } else {
            $(this).addClass('selected');
            $('.popEditAdm').slideFadeToggle();
        }
        return false;
    });
  
    $('.canceleditAdm').on('click', function() {
        deselectEditAdm($('.editAdm'));
        return false;
    });
});

/*Add New Adm*/
function deselectAddAdm(e) {
    $('.popAddAdm').slideFadeToggle(function() {
        e.removeClass('selected');
    });    
}

$(function() {
    $('#addAdm').on('click', function() {
        if($(this).hasClass('selected')) {
            deselectAddAdm($(this));               
        } else {
            $(this).addClass('selected');
            $('.popAddAdm').slideFadeToggle();
        }
        return false;
    });
  
    $('.cancelAddtAdm').on('click', function() {
        deselectAddAdm($('#addAdm'));
        return false;
    });
});