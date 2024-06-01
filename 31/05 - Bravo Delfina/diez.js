/*Ejecicio 10/
/tomar un array como parametro y sumar todos sus elementos*/
let a = 0
function sumaElementos(vector){
  for(i=0;i<vector.length; i++){
     a = a + vector[i];
  }
  return a;
}
sumaElementos([1,2,3,4,5,6])