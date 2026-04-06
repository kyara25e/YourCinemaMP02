class CarritoCompra{
    constructor(){
        this.carrito = []
    }

    agregarProducto(producto){
        this.carrito.push(producto)
        return "producto agregado con exito"
    }

    calcularTotal(){
        const sumaTotal = this.carrito.reduce( (acum, ele) => {
            acum = acum + ele.precio
            return acum
        }, 0 )
        return sumaTotal
    }

    aplicarDescuento(porcentaje) {
        const total = this.calcularTotal()
        return total - (total * porcentaje) / 100
    }
}




module.exports = {
    CarritoCompra
}