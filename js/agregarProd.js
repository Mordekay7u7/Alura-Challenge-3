import { clientServices } from "./lista-cleintes.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault()
    const url = document.querySelector("[data-url]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const descipcion = document.querySelector("[data-descipcion]").value;

    clientServices.agregarProductos(nombre,precio,url,categoria,descipcion).then( respuesta =>{
        window.location ="productos.html" 
        alert("Producto añadido")
    }).catch(err =>{
        console.log(err)
    })  
})