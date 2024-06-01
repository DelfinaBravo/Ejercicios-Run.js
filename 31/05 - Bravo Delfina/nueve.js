/*Ejecicio 9/
/tomar una cadena como parametro y devolver la cadena invertida*/
let p = ""
function invertido(palabra){
  for(i = palabra.length;i>0;i--){
     p = p + palabra.substring(i-1, i)
  }
  return p
}
invertido("delfina")
