const searchInput = document.querySelector("[data-buscar]");
const btnBuscar = document.querySelector("#buscar-producto")


btnBuscar.addEventListener("click", (event)=>{
    console.log("Buscar")
    if(searchInput.value === null || searchInput.value === "" || searchInput.value === " " ){
        window.location.href="productos.html"
    }else{
        window.location.href="productos.html"
    }
})