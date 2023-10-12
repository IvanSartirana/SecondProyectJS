const ProductosEnStock = function(descripcion, valor, Stock){
    this.descripcion = descripcion
    this.valor = valor
    this.Stock = Stock
}

let Producto1 = new ProductosEnStock("Nvidia Geforce MSI 3070", 1200000, 10)
let Producto2 = new ProductosEnStock("Monitor Asus TUF Gaming 144hz", 300000, 3)
let Producto3 = new ProductosEnStock("Procesador AMD Ryzen 7 5700x", 250000, 6)
let Producto4 = new ProductosEnStock("Teclado HyperX Alloy Origins 60", 70000, 60)
let Producto5 = new ProductosEnStock("Escritorio Industrial 190x60", 50000, 10)
let Producto6 = new ProductosEnStock("Mouse Logitech G PRO Superlight", 120000, 3)

let listaParaFiltrar = [Producto1, Producto2, Producto3, Producto4, Producto5, Producto6]

function filtrar(){
    let inicioDeFuncion = prompt("Ingresa el producto que deseas buscar para tu computadora").trim().toUpperCase()
    let finalDeFuncion = listaParaFiltrar.filter((Producto) => Producto.descripcion.toUpperCase().includes(inicioDeFuncion))

    if(finalDeFuncion.length > 0){
        console.table(finalDeFuncion)
    }
    else{
        alert("No hay existencias en el producto ingresado, o no existe. Por favor, elija otro o cree uno.")
    }
}

function agregarProducto(){
    let descripcion = prompt("Ingresa nuevo producto").trim()
    let valor = parseFloat(prompt("Ingresa el precio"))
    let Stock = parseInt(prompt("Ingresa la cantidad de stock que existe"))

    if (isNaN(valor) || descripcion === "" || isNaN(Stock)){
        alert("Ingrese el producto con todas sus características.")
        return;
    }

    let producto = new ProductosEnStock(descripcion, valor, Stock)
    listaParaFiltrar.push(producto)
    console.table(listaParaFiltrar)
}