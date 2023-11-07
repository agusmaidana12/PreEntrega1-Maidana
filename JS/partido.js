document.getElementById("iniciarPartido").addEventListener("click", function(){

    console.log("¡Bienvenido al simulador de Serie de Partidos del Fútbol Argentino!");
    const equipos = ["boca", "river", "independiente", "racing"];
    const cantidadPartidos = 2; //ACA CREO UNA VARIABLE PAra LA CANTIDAD DE PARTIDOS QUE QUIERO QUE HAYA
    
    function elegirEquipo() {
        let equipoElegido = prompt("Elegí tu equipo: (Boca, River, Independiente o Racing):").toLowerCase();
        if (equipos.includes(equipoElegido)) {
            alert(`Tu equipo es: ${equipoElegido}. ¿Preparado?`);
    
        for (let i = 1; i <= cantidadPartidos; i++) {
                alert(`Partido ${i} de ${cantidadPartidos}`);
                jugarPartido(equipoElegido);
                if (i < cantidadPartidos) {
                    const revancha = prompt("¿Querés jugar de vuelta? (Responde 'Si' o 'No').").toLowerCase();
                    if (revancha !== "si") {
                        break; //SI NO QUIERE ROMPO CICLO Y TERMINA EL SIMULADOR
                    }
                }
            }
    
            alert("Serie de partidos finalizada. ¡Gracias por jugar!");
        } else {
            alert("Equipo no válido. Por favor, elegí uno de los equipos disponibles.");
            elegirEquipo();
        }
    }
    
    function generarResultadoAleatorio() {
        const resultados = ["Gana", "Empate", "Pierde"];
        const resultadoAleatorio = resultados[Math.floor(Math.random() * resultados.length)];
        return resultadoAleatorio;
    }
    
    function jugarPartido(equipoUsuario) {
        const equipoAleatorio = equipos[Math.floor(Math.random() * equipos.length)];
        alert(`¡Empieza el partido! Tu rival es: ${equipoAleatorio}.`);
        alert("¡Mucha Suerte!")
        const resultado = generarResultadoAleatorio();
        alert(`El resultado del partido es: ${resultado} ${equipoUsuario}`);
    }
    
    elegirEquipo();
    
    });
