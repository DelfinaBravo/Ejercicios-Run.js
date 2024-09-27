const abc = 'abcdefghijklmnopqrstuvwxyz';
const mensajeEncriptado = "crjdrhlzerjgfuirercxleuzrgvejrigvifefcfyrireuvcrdzjdrdrevirhlvcfyrtvvcyfdsiv";

for (let d = 1; d < 26; d++) {
    let mensajeDescifrado = '';
    for (let letra of mensajeEncriptado) {
      let i = abc.indexOf(letra);
      mensajeDescifrado += i === -1 ? letra : abc[(i - d + 26) % 26];
    }
    console.log(`Desplazamiento ${d}: ${mensajeDescifrado}`);
}
