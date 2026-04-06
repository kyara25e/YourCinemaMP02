const{CarritoCompra} = require("../index.js")

let newCarrito
let producto
let producto2
let producto3


beforeEach( () => {
    newCarrito = new CarritoCompra()
    producto =  {
        nombre: "producto1",
        precio: 100
    }
    producto2 =  {
        nombre: "producto1",
        precio: 400
    }
    producto3 =  {
        nombre: "producto1",
        precio: 400
    }

})

describe("Class CarritoCompra", () => {
    it("la clase CarritoCompra existe", () => {
        expect(CarritoCompra).toBeInstanceOf(Function)
    })

    it("la clase CarritoCompra se puede instanciar", () => {
        expect(newCarrito).toBeInstanceOf(CarritoCompra)
    })

    it("la clase CarriCompra debe tener los siguientes metodos: ", () => {
        expect(CarritoCompra.prototype.constructor).toBeDefined()
        expect(CarritoCompra.prototype.agregarProducto).toBeDefined()
        expect(CarritoCompra.prototype.calcularTotal).toBeDefined()
        expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined()
    })
})

describe("Constructor", () => {
    it("debe inicializar el carrito de compras como un array vacio", () => {
        expect(newCarrito.carrito).toEqual([])
    })
})

describe("Agregar Producto", () => {
    it("debe recibir un producto y agregarlo al carrito", () => {
        expect(newCarrito.agregarProducto(producto)).toBe("producto agregado con exito")
        expect(newCarrito.carrito[0]).toEqual(producto)
    })
})

describe("Calcular Total", () => {
    it("debe recibir sumar el total de los productos del carrito", () => {
        newCarrito.agregarProducto(producto2)
        newCarrito.agregarProducto(producto3)

        expect(newCarrito.calcularTotal()).toBe(800)
    })
})

describe("Aplicar descuento", () => {
    it("Aplica un descuento al total de la compra según el porcentaje especificado", () => {
        newCarrito.agregarProducto(producto2)
        newCarrito.agregarProducto(producto3)
        expect(newCarrito.aplicarDescuento(0)).toBe(800)
        expect(newCarrito.aplicarDescuento(50)).toBe(400)
        expect(newCarrito.aplicarDescuento(100)).toBe(0)
    })
})