/*3_Crear una funcion que recibe un string de un correo, y vuelve true o false en caso de tenga el aspecto de una direccion de correo.*/
function Email(correo) {
    //Esta es la expresión regular que usamos para verificar el formato básico de un correo electrónico
    let validacion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //Método que prueba si el string correo cumple con la expresión regular validacion. Devuelve true si el formato es correcto y false si no lo es.
    return validacion.test(correo);
  }
  Email("delfina@gmail.com");// true
  Email("aylen.gmail.com");// false
  Email("bravo@gmail");// false
  Email("delfinaAylen @gmail.com");// false