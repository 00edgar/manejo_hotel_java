function mostrarMenu(){
    let opcion = prompt(
        "   MANEJO DE HOTEL ELIJA UNA OPCION\n"+
        "1. Registrar nueva havitación\n"+
        "2. Listar habitaciones\n"+
        "3. Buscar habitación por numero\n"+
        "4. Canbiar estado de habitación\n"+
        "5. Para eliminar habitación\n"+
        "6. Para salir"
    )

    switch(opcion){
        case "1":
            registrarHabitacion(mostrarMenu);
            break;
        case "2":
            mostrarHabitacion(mostrarMenu);
            break;
        case "3":
            buscarHabitacion(mostrarMenu);
            break;
        case "4":
            actualizarHabitacion(mostrarMenu);
            break;
        case "5":
            eliminarHabitacion(mostrarMenu);
            break;
        case "6":
            console.log("Salir!")
            salir();
            break;
        default:
            console.log("Ingrese un valor válido");
            mostrarMenu();
    }
}

mostrarMenu()


function registrarHabitacion(callback){
        let nombre = prompt("ingrese el numero de la nueva habitacion: ")
        let tipo = prompt("ingrese el tipo de habitacion(sencilla, double, siute): ")
        let precio = prompt("ingrese el costo de la habitacion ")
        let estado = prompt("Estado (Libre, Ocupado, En limpieza)")
        
        let habitacion = {nombre, tipo, precio, estado};
         console.log("cargando")
        setTimeout(function(){
            habitaciones.push(habitacion);
            console.log("habitacion numero"+ nombre+ " registrada");
            callback();
        }, 3000) ;
}
   
   
   function mostrarHabitacion(callback){
       console.log("************* Listado de Habitaciones *************");
       habitaciones.forEach(habitacion => {
           console.log("Habitacion numero ", habitacion.nombre + ", Tipo: " , habitacion.tipo + ", Precio: " , habitacion.precio + ", Estado: " , habitacion.estado);
       });
       if (callback) callback();
    }


   function buscarHabitacion(callback){
       let nombre = prompt(" Ingrese el nombre de la habitacion a buscar:")
       console.log("Buscando...")
       setTimeout(function(){
           let habitacionEncontrada = habitaciones.find(habitacion =>{
               return habitacion.nombre.toLowerCase() === nombre.toLowerCase()
           });
           if(habitacionEncontrada){
               console.log(habitacionEncontrada.nombre, habitacionEncontrada.precio, habitacionEncontrada.estado)
           }else{
               console.log("habitacion buscada no existe!!!")
           }
           callback();
       },4000)
   }
   
  function actualizarHabitacion(callback){
      let nombre = prompt("ingrese el numero de la habitacion a actualizar:")
      console.log("Buscando...")
      setTimeout(function(){
          let habitacionEncontrada = habitaciones.find(habitacion =>{
              return habitacion.nombre
          });
  
          if(habitacionEncontrada){
              let estadoModificado = prompt("Nuevo estado (Libre, Ocupado, En limpieza):")
              habitacionEncontrada.estado = estadoModificado;
              console.log("estado de la havitacion modificado...")
          }else{
              console.log("habitacion no existe!!!")
          }
          callback();
      },2000)
  }



  function eliminarHabitacion(callback){
    let nombre = prompt("ingrese el numero de la habitacion a eliminar:")
    console.log("Buscando...")  
    setTimeout(function(){
        let indice = habitaciones.findIndex(habitacion =>{
            return habitacion.nombre.toLowerCase() === nombre.toLowerCase()
        });
        if(indice !== -1){
            habitaciones.splice(indice, 1);
            console.log("habitacion eliminada...")
        }else{
            console.log("habitacion no existe!!!")
        }                   
        callback();
    }
    ,2000)
  
  }
  function salir(){
    console.log("Gracias por usar el sistema de gestión de hotel. ¡Hasta luego!");
  } 
  let habitaciones = [

    
  ];