let listaDeCompras = new Set();

export const agregarProducto = (producto) => {
    listaDeCompras.add(producto);
}

export const eliminarProducto = (producto) => {
    listaDeCompras.delete(producto);
}

export const mostrarLista = () => {
    for(const producto of listaDeCompras){
        console.log(`Producto: ${producto}`);
    }
}