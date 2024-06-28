
/*4- Que reciba un rango de numeros y devuelva un
 array de 10 numeros random dentro de ese rango.*/
function rangoDiez(inicio, fin){
    let vec = [];
    for(i=0;i<10;i++){
      vec[i]=Math.random()*(fin-inicio)+inicio
    }
    return vec
  }
  rangoDiez(10,100)