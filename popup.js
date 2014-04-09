document.addEventListener('DOMContentLoaded',
    function() {  
        var login    = localStorage.getItem("login");
        var password = localStorage.getItem("password");
      
        // Valores somente para usar no TIA e no Moodle. Eles não aparecem na tela!!! 
        document.getElementsByName('alumat')[0].value = login;
        document.getElementsByName('pass')[0].value = password;
        document.getElementsByName('username')[0].value = login;
        document.getElementsByName('password')[0].value = password;
        
        // Mostrar o login e senha nos campos visíveis  
        document.getElementsByName('txtLogin')[0].value = login;        
        document.getElementsByName('txtSenha')[0].value = password;
                       
        document.getElementsByName('btnTia')[0].addEventListener('click', function(e){
            document.forms.tia.submit();
        });
        document.getElementsByName('btnMoodle')[0].addEventListener('click', function(e){
            document.forms.moodle.submit();            
        });
        document.getElementsByName('btnSave')[0].addEventListener('click', function(e){
             localStorage.setItem("login", document.getElementsByName('txtLogin')[0].value);
             localStorage.setItem("password", document.getElementsByName('txtSenha')[0].value);
        });      
    }
);