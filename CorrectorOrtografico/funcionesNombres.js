//ACTIVIDAD NOMBRES
/*
1_ Crear un vector de 100 o mas nombres masculinos.
2_ Crear un vector de 100 o mas nombres femeninos.
3_ Crear un vector de nombres unisex.

5_ Crear una funcion que reciba por parametro un nombre mal escrito y devuelve el nombre correctamente escrito.
6_ Crear una funcion que tome el resultado de la funcion anterior y lo envie a otra funcion que devuelve el articulo correcto junto al nombre recibido. Ej: "El Diego".
7_ Crear una funcion que devuelve true si recibe un nombre unisex.
*/

// Vector de 100 nombres masculinos
const nombresMasculinos = [
    "Juan", "Mateo", "Benjamín", "Santiago", "Matías", "Tomás", "Ignacio", "Lucas", "Facundo", "Thiago", "Martín", "Nicolás", "Agustín", "Lautaro", "Emiliano", "Felipe", "Bruno", "Julian", "Federico", "Axel", "Ezequiel", "Franco", "Gonzalo", "Kevin", "Maximiliano", "Bautista", "Iván", "Leandro", "Joaquín", "Pablo",
  "Luciano", "Ramiro", "Enzo", "Damian", "Gabriel", "Hugo", "Elías", "Cristian", "Simón", "Esteban", "Emilio", "Alejo", "Pedro", "Alan", "Manuel", "Sebastián", "Rodrigo", "Marco", "Dante", "Andrés", "Ricardo", "Valentín", "Rafael", "Nicolás", "Damián", "Ciro", "Lorenzo", "Adrián", "Hernán", "Brayan", "Axel",
  "Camilo", "Eduardo", "Matteo", "Rocco", "Ariel", "Fernando", "Oscar", "Iván", "Raúl", "Javier", "Tobías", "Vicente", "Sergio", "Esteban", "Luis", "Santino", "Tomás", "Renzo", "Gael", "Gustavo", "Julián", "Alejandro", "Carlos", "Mauro", "Roberto", "Patricio", "Martín", "Diego", "Leonel", "Ángel","Antonio", "Fabián", "Pascual", "Luca", "Isidro", "Jonás", "Bautista", "Felipe", "David", "Ramón"
  ];
  
  // Vector de 100 nombres femeninos
  const nombresFemeninos = [
  "Sofía", "Valentina", "Martina", "Rene","Isabella","Mía","Camila","Catalina", "Emilia","Lucía","Victoria", "Julieta", "Agustina","Paula","Milagros","Lola", "Abril","Josefina","Rocío","Aitana", "Florencia","Ana","Alma","Carla", "Pilar","Olivia","Sara","Malena", "Bianca","Renata","Jazmín","Clara", "Victoria","Agostina","Carolina", "María","Candela","Valeria","Lara", "Gabriela","Margarita","Irene", "Juana","Gabriela","Marina", "Daniela","Elena","Lía","Verónica", "Luciana","Silvana","Renata", "María","Francesca","Manuela", "Irina","Zoe","Ariana","Ludmila", "Constanza","Amanda","Cecilia", "Marta","Rosario","Andrea","Nina", "Micaela","Gisela","Alba","Luz", "Tania","Claudia","Delfina", "Antonella","Estela","Emma", "Noelia","Eva","Ámbar","Regina", "Juliana","Selena","Fátima", "Nicole","Isabel","Lucía","Rebeca", "Paulina","Sabrina","Verónica", "Mónica","Raquel","Carina","Nadia", "Mariana","Carmen","Miranda", "Tatiana","Sandra","Anabel","Araceli"
  ];
  const nombresUnisex = [
    "Alex", "Maria", "Jose", "Lujan", "Angel", "Cameron"
  ];
  
  // Función para calcular la distancia de Levenshtein entre dos cadenas
  function calcularDistanciaLevenshtein(a, b) {
    const matriz = [];
  
    // Inicializamos la matriz
    for (let i = 0; i <= b.length; i++) {
      matriz[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
      matriz[0][j] = j;
    }
  
    // Llenamos la matriz con las distancias
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matriz[i][j] = matriz[i - 1][j - 1];
        } else {
          matriz[i][j] = Math.min(
            matriz[i - 1][j - 1] + 1, // Sustitución
            matriz[i][j - 1] + 1,     // Inserción
            matriz[i - 1][j] + 1      // Eliminación
          );
        }
      }
    } 
    return matriz[b.length][a.length];
  }
  
  // Función para encontrar el nombre más cercano
  function corregirNombre(nombreErroneo) {
    // Unimos todos los nombres en un solo array
    const todosLosNombres = [...nombresMasculinos, ...nombresFemeninos, ...nombresUnisex];
    let nombreCorrecto = "";
    let menorDistancia = Infinity;
    // Recorremos todos los nombres y buscamos el más cercano
    for (let i = 0; i < todosLosNombres.length; i++) {
      const nombreActual = todosLosNombres[i];
      const distancia = calcularDistanciaLevenshtein(nombreErroneo.toLowerCase(), nombreActual.toLowerCase());
      // Si encontramos una menor distancia, actualizamos el nombre correcto
      if (distancia < menorDistancia) {
        menorDistancia = distancia;
        nombreCorrecto = nombreActual;
      }
    }
    return nombreCorrecto;
  }
  
  function agregarArticuloCorrecto(nombre) {
    // Verificamos si el nombre está en la lista de masculinos, femeninos o unisex
    if (nombresMasculinos.includes(nombre)) {
      return `El ${nombre}`;
    } else if (nombresFemeninos.includes(nombre)) {
      return `La ${nombre}`;
    } else if (nombresUnisex.includes(nombre)) {
      return `El/La ${nombre}`; // Para nombres unisex, se puede usar ambos artículos
    } else {
      return `El/La ${nombre}`; // Caso predeterminado para nombres que no estén en las listas
    }
  }
  // Función que verifica si el nombre es unisex
  function esNombreUnisex(nombre) {
    return nombresUnisex.includes(nombre);
  }
  
  // Nueva función que devuelve un mensaje de bienvenida
  function mensajeBienvenida(nombre) {
    if (nombresMasculinos.includes(nombre)) {
      return "Bienvenido";
    } else if (nombresFemeninos.includes(nombre)) {
      return "Bienvenida";
    } else if (nombresUnisex.includes(nombre)) {
      return "Hola";
    } else {
      return "Hola!"; // Mensaje por defecto si el nombre no se encuentra
    }
  }
  
  // Función que integra todas las funcionalidades
  function procesarNombreConArticulo(nombreMalEscrito) {
    const nombreCorregido = corregirNombre(nombreMalEscrito);
    const resultadoFinal = agregarArticuloCorrecto(nombreCorregido);
    // Verificamos si el nombre corregido es unisex
    const esUnisex = esNombreUnisex(nombreCorregido);
    // Obtener mensaje de bienvenida
    const bienvenida = mensajeBienvenida(nombreCorregido) + " " + nombreCorregido+ "!";
  
    return {
      nombreCorregido,
      resultadoFinal,
      esUnisex,
      bienvenida
    };
  }
  
  // Ejemplo de uso
  const nombreMalEscrito = "mamia"; // Ejemplo con nombre femenino
  const res = procesarNombreConArticulo(nombreMalEscrito);
  console.log(res.bienvenida); // Mensaje de bienvenida
  //console.log(`Tu nombre corregido es: ${re.nombreCorregido}`);  // Nombre corregido
  console.log(`Tu nombre comenzando con un articulo se veria: ${res.resultadoFinal}`); // Resultado con el artículo
  console.log(`Si tu nombre es unisex visualizaras "true": ${res.esUnisex}`); // true o false  