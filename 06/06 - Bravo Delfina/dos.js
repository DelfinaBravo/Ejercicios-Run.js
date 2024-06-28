function finde(dias){

    for(i=0;i<vector.length; i++){
       dias[i] = dias[i].toLowerCase();
      if(dias[i] == "sabado" || dias[i] == "domingo"){
        D = true
      }else{
        D = false
      }
    }
    return D
    
  }
  dias(["lunes","martes","miercoles","jueves","Sabado"])