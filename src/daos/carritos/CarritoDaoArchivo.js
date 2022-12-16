import ContenedorArchivo from "../../contenedores/ContenedorArchivo.js";

class CarritoDaoArchivos extends ContenedorArchivo {
    constructor() {
        super('src/DB/productos.json')
    }
}

export default CarritoDaoArchivos;
