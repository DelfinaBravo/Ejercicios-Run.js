/*Ejercicio 5/
/devolver la cantidad de vocales que tiene una cadena*/
let c = 0;
let vocal;
function vocales(palabra){
  palabra = palabra.toLowerCase();
  for(i=0; i < palabra.length;i ++){
    vocal = palabra.substring(i, i + 1);
    if(vocal == "a" || vocal == "e" || vocal == "i" || vocal == "o" || vocal == "u"){
      c = c + 1;
    }
  }
  return c;
}
vocales("delfina")
