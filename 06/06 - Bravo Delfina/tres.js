function sumaNA(nombre, apellido){
    let suma=[];
     for(i=0;i<5;i++){
       suma[i]=nombre[i].length + apellido[i].length;
     }
     return suma
   }
   
   sumaNA(["dario", "lucas", "jenifer", "julieta", "oscar"],
          ["prado", "marquez", "alvarez", "bravo", "gonzales"])