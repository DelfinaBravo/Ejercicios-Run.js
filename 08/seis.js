//punto 6
/*6_ Crear una funcion que combine todas las funciones para crear un juego zoadiacal de Hosroscopos, donde el juego devuelve una predicción random para un signo zodiacal.*/
  function juego(){
    return signo(redondeo(ran())) + " durante el mes de " + mes(redondeo(ran())) + " tu prediccion será " + frases(redondeo(ran()))
}
juego()
