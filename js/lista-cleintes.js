const listaClientes = () => fetch("http://localhost:3000/producto").then( respuesta => respuesta.json());
const listaUsuarios = () => fetch("http://localhost:3000/usuario").then( respuesta => respuesta.json());


const agregarProductos = (nombre,precio,url,categoria,descripcion)=>{
    return fetch (`http://localhost:3000/producto`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({nombre,precio,url,categoria,descripcion,id:uuid.v4()})
    })
        .then(respuesta => respuesta).catch(err  =>console.log(err))
}
const eliminarProducto = (id)=>{
    return fetch(`http://localhost:3000/producto/${id}`,{
        method:"DELETE"
    })
}

const detalleProducto = (id) =>{
    return fetch(`http://localhost:3000/producto/${id}`).then( (respuesta)=>  respuesta.json()
    )
}

const modProducto = (url,categoria,nombre,precio,descripcion,id)=>{
    return fetch (`http://localhost:3000/producto/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url,categoria,nombre,precio,descripcion})
    })
        .then(respuesta => respuesta).catch(err  =>console.log(err))
}

export const clientServices ={
   listaClientes,
   agregarProductos,
   listaUsuarios,
   eliminarProducto,
   modProducto,
   detalleProducto
}
