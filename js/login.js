import { clientServices } from "./lista-cleintes.js";;

const formulario = document.querySelector("[data-form]");

formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault()

    clientServices.listaUsuarios()
        .then((data)=>{
            const email = document.querySelector("[data-correo]").value;
            const passw = document.querySelector("[data-passw]").value;
            let exuser = false;
            data.forEach(usuario => {
            if (usuario.correo === email && usuario.contrasena === passw) {
                exuser = true;
            }
            });
           
            if (exuser) {
                sessionStorage.setItem('loged', "si");
                window.location.href = "productos.html";
            } else {
                alert("Usuario y/o contraseña incorrecta");
            }
      
    })
})
