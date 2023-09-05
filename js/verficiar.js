if(window.sessionStorage){
    const loged = sessionStorage.getItem("loged")
    if(loged === "si"){
        const cambioBtn = document.getElementById("LoginBtn")
        cambioBtn.innerHTML = "Log Out"
        cambioBtn.removeAttribute("href")
        cambioBtn.setAttribute("href","LogOut.html")

        setTimeout(() => {
            const mostrarEditar = document.querySelectorAll("#editar__borrar");
            for (let x = 0; x < mostrarEditar.length; x++) {
                mostrarEditar[x].classList.toggle("editar__borrar");
                mostrarEditar[x].classList.toggle("editar__borrar__hidde")
            }
        }, 2000);
    }
    else{
        console.log("No Logeado")
    }

}
