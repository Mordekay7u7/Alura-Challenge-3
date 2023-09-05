import { clientServices } from "./lista-cleintes.js";

const formulario = document.querySelector("[data-form]");


const obtenerInformacion = async() =>{
    const url = new URL(window.location);
    const  id = url.searchParams.get("id");

    if(id == null){
        // window.location.href = "/error.html";
        console.log("No hay id")
    }
    
    const urlimg = document.querySelector("[data-url]");
    const categoria = document.querySelector("[data-categoria]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

  
    try{
        const producto = await clientServices.detalleProducto(id)
        if(producto.nombre && producto.url &&
            producto.categoria && producto.precio &&
            producto.descripcion){
            nombre.value=producto.nombre;
            urlimg.value=producto.url;
            categoria.value =producto.categoria;
            precio.value= producto.precio;
            descripcion.value = producto.descripcion;
        }else{
            throw new Error(); 
        }
    }
    catch(error){
        // window.location.href = "error.html";
        console.log("error")
    }
}

obtenerInformacion();

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const urlPg = new URL(window.location);
    const  id = urlPg.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    clientServices.modProducto(url,categoria,nombre,precio,descripcion,id).then(()=>{

        window.location.href ="productos.html";
        alert("Porductos modificado");
    })
})