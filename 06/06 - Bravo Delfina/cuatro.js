function rangoDiez(inicio, fin){
    let vec = [];
    for(i=0;i<10;i++){
      vec[i]=Math.random()*(fin-inicio)+inicio
    }
    return vec
  }
  rangoDiez(10,100)