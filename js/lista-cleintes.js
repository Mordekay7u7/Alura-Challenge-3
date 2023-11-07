const listaClientes = () => fetch("https://minispeeds-default-rtdb.firebaseio.com/producto").then( respuesta => respuesta.json());
const listaUsuarios = () => fetch("https://minispeeds-default-rtdb.firebaseio.com/usuario").then( respuesta => respuesta.json());


const agregarProductos = (nombre,precio,url,categoria,descripcion)=>{
    return fetch (`https://minispeeds-default-rtdb.firebaseio.com/producto`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({nombre,precio,url,categoria,descripcion,id:uuid.v4()})
    })
        .then(respuesta => respuesta).catch(err  =>console.log(err))
}
const eliminarProducto = (id)=>{
    return fetch(`https://minispeeds-default-rtdb.firebaseio.com/${id}`,{
        method:"DELETE"
    })
}

const detalleProducto = (id) =>{
    return fetch(`https://minispeeds-default-rtdb.firebaseio.com/${id}`).then( (respuesta)=>  respuesta.json()
    )
}

const modProducto = (url,categoria,nombre,precio,descripcion,id)=>{
    return fetch (`https://minispeeds-default-rtdb.firebaseio.com/${id}`,{
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
