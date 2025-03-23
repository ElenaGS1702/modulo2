import { agregarProducto, eliminarProducto, mostrarLista } from "./compras"

const App = () => {
    console.log("Agregando productos a la lista de compras:........... ");
    agregarProducto("Manzanas");
    agregarProducto("libreta");
    agregarProducto("libreta");
    agregarProducto("Sandia");
    agregarProducto("Limones");
    agregarProducto("Fresas");


    console.log("Eliminando productos de la lista de compras:........... ");
    eliminarProducto("Manzanas");
    eliminarProducto("Sandia");

    console.log("Lista de compras:........... ");
    mostrarLista();
}

App();