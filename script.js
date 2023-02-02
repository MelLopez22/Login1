document.getElementById('btn-login').addEventListener("click", iniciarSesion);
document.getElementById('btn-register').addEventListener("click", register);
window.addEventListener("resize", anchoPagina)

var contenedorLoginRegister= document.querySelector("div.contenedor-form");
var formularioLogin=document.querySelector("form.form-login");
var formularioRegister=document.querySelector("form.form-register");
var cajaTraseraLogin=document.querySelector("div.caja-trasera-login");
var cajaTraseraRegister=document.querySelector("div.caja-trasera-register");

function anchoPagina() {
    if (window.innerWidth>850) {
        cajaTraseraLogin.style.display="block";
        cajaTraseraRegister.style.display="block";

    } else {
        cajaTraseraRegister.style.display="block";
        cajaTraseraRegister.style.opacity="1";
        cajaTraseraLogin.style.display="none";
        formularioLogin.style.display="block";
        formularioRegister.style.display="none";
        contenedorLoginRegister.style.left="0px"
    }
};

anchoPagina();

function iniciarSesion () {
    if (window.innerWidth>850) {
        formularioRegister.style.display="none";
    contenedorLoginRegister.style.left="10px";
    formularioLogin.style.display="block";
    cajaTraseraRegister.style.opacity="1";
    cajaTraseraLogin.style.opacity="0";
    } else {
        formularioRegister.style.display="none";
    contenedorLoginRegister.style.left="0px";
    formularioLogin.style.display="block";
    cajaTraseraRegister.style.display="block";
    cajaTraseraLogin.style.display="none";
    }
    
}

function register () {
    if (window.innerWidth>850) {
        formularioRegister.style.display="block";
    contenedorLoginRegister.style.left="410px";
    formularioLogin.style.display="none";
    cajaTraseraRegister.style.opacity="0";
    cajaTraseraLogin.style.opacity="1";
    } else {
        formularioRegister.style.display="block";
        contenedorLoginRegister.style.left="0px";
        formularioLogin.style.display="none";
        cajaTraseraRegister.style.display="none";
        cajaTraseraLogin.style.display="block";
        cajaTraseraLogin.style.opacity="1";
    }
    
}
