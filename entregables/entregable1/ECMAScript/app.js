import { registrarDestino, mostrarItinerario } from "./viajes";

// Iniciar la aplicación
const iniciarApp = () => {
    // registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();