//punto 4
/*4_ Crear una funcion llamada suerte que devuelve una frase a partir de un numero recibido como parametro entre 1 y 12*/

function frases(f){
    let horoscopos = [
    "Será ideal para comenzar nuevos proyectos.",
    "Una sorpresa agradable te espera en el trabajo.",
    "Tu energía positiva atraerá a personas interesantes.",
    "Cuida de tu salud y bienestar emocional.",
    "Es un buen momento para resolver malentendidos familiares.",
    "Tendrás éxito en tus esfuerzos creativos.",
    "Evita tomar decisiones importantes hoy.",
    "Un viaje inesperado puede estar en tu futuro.",
    "La paciencia será tu mejor aliada en estos días.",
    "Nuevas oportunidades financieras se presentarán pronto.",
    "Un viejo amigo volverá a tu vida con buenas noticias.",
    "Confía en tu intuición para tomar decisiones importantes."
];
    return horoscopos[f-1];
}
frases(6)