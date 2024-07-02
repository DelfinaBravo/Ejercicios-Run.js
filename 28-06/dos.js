/*2_Crear una funcion que recibe un string y devuelve true o false si hay algun numero.*/
// run.js
function contieneNumero(string) {
    //Esta expresión regular busca cualquier dígito en el string.
    let validacion = /\d/;
    //El método test de la expresión regular devuelve true si encuentra un dígito en el string y false si no lo encuentra.
    return validacion.test(string);
  }
  contieneNumero("Hola123");// true
  contieneNumero("Hola");// false