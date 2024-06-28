/*redondea para arriba*/
function redondeo(vector){
    for(i = 0;i<5;i++){
      vector[i] =Math.round(vector[i]);
    }
    return vector;
  }
  redondeo([2.4, 3.5, 4.6, 5.7, 6.8]);