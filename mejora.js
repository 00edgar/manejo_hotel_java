// 1. Mover el array al inicio para evitar errores de referencia
let habitaciones = [];

function mostrarMenu() {
    let continuar = true;

    // 2. Usar un ciclo while para que el programa no muera ni se sature
    while (continuar) {
        let opcion = prompt(
            "   MANEJO DE HOTEL ELIJA UNA OPCION\n" +
            "1. Registrar nueva habitación\n" +
            "2. Listar habitaciones\n" +
            "3. Buscar habitación por numero\n" +
            "4. Cambiar estado de habitación\n" +
            "5. Para eliminar habitación\n" +
            "6. Para salir"
        );

        switch (opcion) {
            case "1":
                registrarHabitacion();
                break;
            case "2":
                mostrarHabitaciones();
                break;
            case "3":
                buscarHabitacion();
                break;
            case "4":
                actualizarHabitacion();
                break;
            case "5":
                eliminarHabitacion();
                break;
            case "6":
                salir();
                continuar = false; // Esto rompe el ciclo y cierra el programa
                break;
            default:
                alert("Ingrese un valor válido");
        }
        
        // Al quitar los callbacks de aquí, el programa es mucho más eficiente
    }
}

// 3. Funciones simplificadas (sin necesidad de pasar el callback por parámetro)

function registrarHabitacion() {
    let nombre = prompt("ingrese el numero de la nueva habitacion: ");
    let tipo = prompt("ingrese el tipo de habitacion (sencilla, doble, suite): ");
    let precio = prompt("ingrese el costo de la habitacion: ");
    let estado = prompt("Estado (Libre, Ocupado, En limpieza): ");

    let habitacion = { nombre, tipo, precio, estado };
    console.log("Cargando...");
    
    // Nota: El setTimeout es asíncrono. En un menú de consola/prompt 
    // real, esto podría desordenar los mensajes, pero lo mantengo por tu diseño.
    habitaciones.push(habitacion);
    console.log("Habitación número " + nombre + " registrada");
}

function mostrarHabitaciones() {
    console.log("************* Listado de Habitaciones *************");
    if (habitaciones.length === 0) {
        console.log("No hay habitaciones registradas.");
    } else {
        habitaciones.forEach(habitacion => {
            console.log(`Habitación: ${habitacion.nombre}, Tipo: ${habitacion.tipo}, Precio: ${habitacion.precio}, Estado: ${habitacion.estado}`);
        });
    }
}

function buscarHabitacion() {
    let nombre = prompt("Ingrese el numero de la habitacion a buscar:");
    console.log("Buscando...");
    
    let habitacionEncontrada = habitaciones.find(h => h.nombre.toLowerCase() === nombre.toLowerCase());
    
    if (habitacionEncontrada) {
        console.log("Encontrada:", habitacionEncontrada.nombre, habitacionEncontrada.precio, habitacionEncontrada.estado);
    } else {
        console.log("La habitación buscada no existe.");
    }
}

function actualizarHabitacion() {
    let nombre = prompt("Ingrese el numero de la habitacion a actualizar:");
    
    // Corregido: Ahora sí busca comparando el nombre
    let habitacionEncontrada = habitaciones.find(h => h.nombre === nombre);

    if (habitacionEncontrada) {
        let estadoModificado = prompt("Nuevo estado (Libre, Ocupado, En limpieza):");
        habitacionEncontrada.estado = estadoModificado;
        console.log("Estado de la habitación modificado con éxito.");
    } else {
        console.log("La habitación no existe.");
    }
}

function eliminarHabitacion() {
    let nombre = prompt("Ingrese el numero de la habitacion a eliminar:");
    let indice = habitaciones.findIndex(h => h.nombre.toLowerCase() === nombre.toLowerCase());
    
    if (indice !== -1) {
        habitaciones.splice(indice, 1);
        console.log("Habitación eliminada correctamente.");
    } else {
        console.log("La habitación no existe.");
    }
}

function salir() {
    console.log("Gracias por usar el sistema de gestión de hotel. ¡Hasta luego!");
}

// Iniciar el programa
mostrarMenu();