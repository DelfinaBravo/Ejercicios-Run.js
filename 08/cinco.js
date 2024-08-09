//punto 5
/*5_ Crear una funcion llamada signo que devuelve un signo zodiacal a partir de un numero recibido como parametro entre 1 y 12*/

function signo(s){
    let signosZ = [
    "Aries",
    "Tauro",
    "Géminis",
    "Cáncer",
    "Leo",
    "Virgo",
    "Libra",
    "Escorpio",
    "Sagitario",
    "Capricornio",
    "Acuario",
    "Piscis"
  ];
    return signosZ[s-1]
  }