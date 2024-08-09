//punto 3
/*3_ Crear una funcion llamada mes que recibe un numero como parametro y  devuelve el nombre del mes correspondiente.(1= enero)*/

function mes(m){
    let meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    return meses[m-1]
}
mes(1)