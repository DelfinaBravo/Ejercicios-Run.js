/*3- Que reciben 2 vectores de 5 nombres y 5 apellidos, y 
devuelve un vector de 5 posiciones con la cantidad total 
de letras entre nombre y apellido.*/
function sumaNA(nombre, apellido){
    let suma=[];
     for(i=0;i<5;i++){
       suma[i]=nombre[i].length + apellido[i].length;
     }
     return suma
   }
   
   sumaNA(["dario", "lucas", "jenifer", "julieta", "oscar"],
          ["prado", "marquez", "alvarez", "bravo", "gonzales"])