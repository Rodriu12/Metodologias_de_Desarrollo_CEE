const array = [10,5,30];
const array2 = array.map(multiplicacion);
function multiplicacion(num){
    return num*2;
}
console.log(array2);