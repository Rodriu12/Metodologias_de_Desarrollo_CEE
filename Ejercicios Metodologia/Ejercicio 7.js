const array = [10,5.5,2];
const resultado = array.filter(mayor_a_5)

function mayor_a_5(num) {
    return num>5;
}
console.log(resultado);