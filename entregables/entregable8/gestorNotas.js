const fs = require('fs');

const filePath = 'entregable8/notas.json';

const agregarNota = (titulo, contenido) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err){
            console.log("Error al leer archivo: ", err);
            return;
        }
        
        let content = {}
        if(data){
            content = JSON.parse(data);
            console.log("CONTENIDO: ", content);
        }
        content[titulo] = contenido;

        fs.writeFile(filePath, JSON.stringify(content), (err) => {
            if(err){
                console.log("Error al agregar la nota: ", err);
                return;
            }
            console.log("Nota agregada correctamente");
        });
    });
}

const leerNotas = () => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err){
            console.log("Error al leer notas: ", err);
            return;
        }

        if(data){
            const content = JSON.parse(data);
            console.log("NOTAS:");
            for (let key in content){
                console.log("Titulo: ", key);
                console.log("Contenido: ", content[key]);
            }
        }
    });
}

const eliminarNota = (titulo) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err){
            console.log("Error al leer notas: ", err);
            return;
        }

        if(data){
            let content = JSON.parse(data);
            delete content[titulo];

            fs.writeFile(filePath, JSON.stringify(content), (err) => {
                if(err){
                    console.log("Error al eliminar la nota: ", err);
                    return;
                }
            })
        }
    });
}

// console.log("Agregando notas...");
// agregarNota('titulo1', 'contenido1');
// agregarNota('titulo2', 'contenido2');
// agregarNota('titulo3', 'contenido3');
// agregarNota('titulo4', 'contenido4');
// agregarNota('titulo5', 'contenido5');
// agregarNota('titulo6', 'contenido6');

// leerNotas();

console.log("Eliminando notas");
eliminarNota('titulo7');
eliminarNota('titulo3');