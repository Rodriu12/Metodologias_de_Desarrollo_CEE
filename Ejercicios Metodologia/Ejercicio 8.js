const array = [20,50,5];
const resultadosuma = array.reduce(sumatotal);

function sumatotal(num, sum) {
    return num + sum;
}

console.log(resultadosuma);