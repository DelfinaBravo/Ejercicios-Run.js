/*1_Crear una funcion que recibe un rango y devuelve una serie de numeros random sin repetir.*/
function Random(ini, fin) {
    let numeros = [];
    while (numeros.length < 10) {
      //genera un número aleatorio dentro del rango [ini, fin].
      let num = Math.floor(Math.random() * (fin - ini + 1)) + ini;
      // verifica que el número generado no esté ya en el array numeros
      if (!numeros.includes(num)){
        //Si el número no está en el array, se añade a numeros
        numeros.push(num);
      }
    }
    return numeros;
  }
  Random(10, 90);