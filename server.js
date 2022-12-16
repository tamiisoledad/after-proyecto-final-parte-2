import instancia from './src/daos/index.js';

const producto = new instancia.producto;
const carrito = new instancia.carrito;

producto.guardar({
    nombre: 'tele'
})