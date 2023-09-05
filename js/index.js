import { clientServices } from "./lista-cleintes.js";

const addCat1 = (categoria)=>{
    const lineaC = document.createElement('div');
    lineaC.classList.add("productos__tema")
    lineaC.setAttribute("id",`${categoria}`)
    let catMod = categoria;
    catMod = catMod.replace(/ /g,"-")
    const contenidoC = `
    <div class="productos__seccion__titulo">
        <h1 class="productos__titulo">${categoria}</h1>
        <div class="productos__titulo__barra__der">
            <a class="productos__vermas" href="productos.html">Ver más
            <i class="fas fa-arrow-right"></i></a>
        </div>
    </div>
    <div class="productos__cartas" data-${catMod}>
    </div>
    `
    lineaC.innerHTML=contenidoC;
    return lineaC
}

const addCat = (categoria)=>{
    const divLabel = document.createElement('div');
    const contenidoL = `
        <h1 class="productos__titulo">${categoria}</h1>
        `
    divLabel.innerHTML = contenidoL
    return divLabel
}

const add =  (nombre,precio,url,id)=>{
    const linea = document.createElement('div');
    linea.classList.add("productos__item")
    linea.setAttribute("id",`${id}`)
    const contenido = `
    <div class="editar__borrar__hidde" id="editar__borrar">
    <i class="fa-solid fa-trash alerta" id="${id}" ></i>
    <a href="modproducto.html?id=${id}" ><i 
    class="fa-solid fa-pen-to-square no__link" id="edit"></i></a>
    </div>
    <img src="${url}" alt="" class="productos__item__img">
    <h2 class="productos__item__titulo">${nombre}</h2>
    <p class="productos__item__precio">$${precio}</p>
    <a class="productos__item__mas" href="#">Ver más</a>
    `

    linea.innerHTML=contenido;
    const trashBtn = linea.querySelector(".alerta");
    const editBtn = linea.querySelector("#edit");
    trashBtn.addEventListener('click',()=>{
        const id = trashBtn.id
        clientServices.eliminarProducto(id).then( respuesta =>{
        }).catch(err => alert("Ocurrio un error"));
    });
    editBtn.addEventListener('click',()=>{
        
    })
    return linea
}

const label = document.querySelector("[data-categoria]")

const tableC = document.querySelector("[data-vista]");

const todosProductos = document.querySelector("[data-productos-todos]")


clientServices.listaClientes().catch((err)=>{
    alert('El servicio no esta activo, porfavor active el servicio')
})

if(todosProductos ===null){
    console.log("No en esta pagina")
}else{
    clientServices.listaClientes().then((data)=>{
    data.forEach(({nombre,precio,url,id})=>{
        const nuevaCarta = add(nombre,precio,url,id)
        todosProductos.appendChild(nuevaCarta)
    })
})
}
if(tableC === null){
    console.log("No hay tableC")
}
else{
    let catNoDup = [];
clientServices.listaClientes().then((data)=>{
    data.forEach(({categoria}) => {
        if(!catNoDup.includes(categoria)){
            catNoDup.push(categoria)
        }        
    });
    catNoDup.forEach((categoria)=>{
        const nuevaLineaC = addCat1(categoria)
        tableC.appendChild(nuevaLineaC)
        
    })
})
}

setTimeout(() => {
        clientServices.listaClientes().then((data)=>{

        data.forEach(({nombre,precio,url,categoria,id}) => {
            let catMod = categoria;
            catMod = catMod.replace(/ /g,"-")
            const table = document.querySelector(`[data-${catMod}]`);
            if(table === null){
                
            }else{
                const nuevaLinea = add(nombre,precio,url,categoria,id)
                table.appendChild(nuevaLinea)
            }
            
            });
        })
    
}, 2000);


