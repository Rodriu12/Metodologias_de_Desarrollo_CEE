function esperar_2_segundos() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hola");
        }, 2000);
    })
}

async function cumplida() {
    const result = await esperar_2_segundos();
    console.log(result);
}
cumplida();
