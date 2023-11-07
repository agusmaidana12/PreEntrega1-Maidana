document.getElementById("iniciarSimulador").addEventListener("click", function() {
console.log("Conectado");

  let nombreUser = prompt("Ingresa tu nombre aquí");
  console.log("nombreUser");
  
  if (nombreUser) {
    alert("Hola " + nombreUser + " ¡Bienvenid@!");
  }
  
  let gustaElFutbol = prompt("¿Te gusta el fútbol? (Responde 'Si' o 'No').").toLowerCase(); //tlc para comodidad del usuairio.
  //Valido que le guste el futbol 
  if (gustaElFutbol === "si") {
    alert("¡Joya! Puedes continuar.");
    
    //ACA EMPIEZA EL SIMULADOR
    alert("Bienvenido al Simulador de Equipos de Fútbol Argentino");
    alert("Equipos de fútbol argentino disponibles:\n1. Boca Juniors\n2. River Plate\n3. Independiente");
//Aplico funcion con variables y datos 
    function mostrarInfoEquipo(equipo) {
      let equiposArgentinos = {
        boca: {
          nombre: "Boca Juniors",
          estadio: "La Bombonera",
          titulos: 70,
          descensos: 0,
          rival: "River Plate",
        },
        river: {
          nombre: "River Plate",
          estadio: "Estadio Monumental",
          titulos: 68,
          descensos: 1,
          rival: "Boca Juniors",
        },
        independiente: {
          nombre: "Independiente",
          estadio: "Estadio Libertadores de América",
          titulos: 47,
          descensos: 1,
          rival: "Racing Club",
        },
      }

      let info = equiposArgentinos[equipo];
      if (info) {
        alert("Equipo: " + info.nombre + "\nEstadio: " + info.estadio + "\nTítulos: " + info.titulos + " títulos." + "\nDescensos: " + info.descensos + " descensos." + "\nRival: " + info.rival + ".");
      } else {
        alert("Equipo no encontrado. Intenta con otro nombre.");
      }
    }

    let opcion = prompt("Elige un equipo de fútbol argentino (1, 2 o 3):");
  
    if (opcion === "1") {
      mostrarInfoEquipo("boca");
    } else if (opcion === "2") {
      mostrarInfoEquipo("river");
    } else if (opcion === "3") {
      mostrarInfoEquipo("independiente");
    } else {
      alert("Opción no válida. Inténtalo nuevamente.");
    }
  } else if (gustaElFutbol === "no") {
    alert("Si no te gusta el fútbol, la simulación se detendrá.");
  } else {
    alert("Respuesta no válida. Por favor, responde 'si' o 'no'.");
  }
});
