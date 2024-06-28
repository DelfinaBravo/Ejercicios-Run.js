/*5- Que reciba el array de 10 numeros y devuelva true o false
si hay numeros repetidos.*/
rangoDiez(10,100)
function repe(vector){
    for(i=0;i<vector.length; i++){
     for(j = 1;j<vector.length -1; j++){
     if(vector[i] === vector[j+i]){
       r = true
     }
    } 
  }
    return r
  }
  repe(rangoDiez(10,21))
  