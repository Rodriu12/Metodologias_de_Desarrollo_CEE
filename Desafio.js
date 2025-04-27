const time = 1000;
const lista_de_pedidos = [{
    id: 0,
    nombrepedido: 'Grand Theft Auto 6 en PS6',
    Entregado: true,
},{
    id: 1,
    nombrepedido: 'Transport Fever 2 PS5',
    Entregado: true,
},{
    id: 2,
    nombrepedido: 'Grand Theft Auto Advance Game Boy Advance',
    Entregado: true,
},{
    id: 3,
    nombrepedido: 'Train Fever PC',
    Entregado: false,
},{
    id: 4,
    nombrepedido: 'Playstation 4 + 10 juegos incluidos',
    Entregado: false,
},{
    id: 5,
    nombrepedido: 'Zuma Deluxe PC',
    Entregado: false,
}]

function ListarPedidos(pedido) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(pedido.Entregado == true){
                resolve("Entregado")
            }else{
                reject("Pendiente")
            }
        }, time);
    })
}
async function MostrarPedidos(lista) {
    let result = null;
    for (let i = 0; i < lista_de_pedidos.length; i++) {
        try {
            result = await ListarPedidos(lista[i]);
        } catch (error) {
            result = error
        }finally{
            console.log(lista[i].id + " . "+lista[i].nombrepedido+" : "+result)
        }
    }
}
MostrarPedidos(lista_de_pedidos);
