/*Ejercicio 7/
/determinar si un numero es par o impar*/
function parImpar(numero){
  let resultado = numero % 2
  if(resultado == 0){ 
      return "Tu numero es par";
   }else{
      return "Tu numero es impar";  
 }
}
parImpar(4)

function parImparr(numero){
  while(numero > 1){
    numero = numero - 2;
  }
   if(numero == 0){ 
      return "Tu numero es par";
   }else{
      return "Tu numero es impar";  
 } 
}
parImparr(7)

