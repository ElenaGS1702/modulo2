const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

const result1 = productos.filter(producto => producto.precio < 100);
console.log("Productos con precio menor a 100: ", result1);

const result2 = productos.sort((a, b) => {
    const nameA = a.nombre.toUpperCase();
    const nameB = b.nombre.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // nombres iguales
    return 0;
});
console.log("Productos ordenados alfabeticamente: ", result2);

const result3 = productos.map(producto => producto.nombre);
console.log("Productos: ", result3);

const result4 = productos.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.precio;
}, 0);
console.log("Total productos: $", result4);

const result5 = productos.some(item => item.categoria == "Linea blanca");
console.log("Existe algun producto de la categoria de linea blanca? ", result5);

const result6 = productos.every(item => item.precio > 300);
console.log("Todos los productos tiene un precio mayor a 300? ", result6);