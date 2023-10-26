const Producto = function(nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

let Producto1 = new Producto("Nvidia Geforce MSI 3070", 1200000, 10)
let Producto2 = new Producto("Monitor Asus TUF Gaming 144hz", 300000, 3)
let Producto3 = new Producto("Procesador AMD Ryzen 7 5700x", 250000, 6)
let Producto4 = new Producto("Teclado HyperX Alloy Origins 60", 70000, 60)
let Producto5 = new Producto("Escritorio Industrial 190x60", 50000, 10)
let Producto6 = new Producto("Mouse Logitech G PRO Superlight", 120000, 3)

let listaParaFiltrar = [Producto1, Producto2, Producto3, Producto4, Producto5, Producto6]

const filtrarBtn = document.getElementById("filtrar")
filtrarBtn.addEventListener("click", filtrarProductos)

const agregarProductos = document.getElementById("agregar")
agregarProductos.addEventListener("click",agregarProducto)


function filtrarProductos(){
    const body = document.querySelector("body")
    const input = document.getElementById("filtrarPr").value
    const palabraClave = input.trim().toUpperCase()
    const resultado = listaParaFiltrar.filter((producto) => producto.nombre.toUpperCase().includes(palabraClave))
   
if(resultado.length >0){
    const container = document.createElement("div")

    resultado.forEach((producto)=>{
        const card = document.createElement("div")
        const nombre= document.createElement("h2")
        nombre.textContent=producto.nombre
        card.appendChild(nombre)
        const precio = document.createElement("p")
        precio.textContent = `precio: ${producto.precio}`
        card.appendChild(precio)
        const stock = document.createElement("p")
        stock.textContent = `stock: ${producto.stock}`
        card.appendChild(stock)

        container.appendChild(card)
    })

    body.appendChild(container)
}else{
    alert("no se encontraron productos")
}

}


function agregarProducto(){
    const form = document.createElement("form")
    form.innerHTML=`
    <label for="nombre-input">Nombre:</label>
    <input type="text" id="nombre-input" required><br>
  
    <label for="precio-input">Precio:</label>
    <input type="number" id="precio-input" required><br>
  
    <label for="stock-input">Stock:</label>
    <input type="number" id="stock-input" required><br>
  
    <button type="submit"> agregar <button> `

    form.addEventListener("Submit", function(event){
        event.preventDefault();
        
        const nombreInput= document.getElementById("nombre-input").value.trim()
        const precioInput= document.getElementById("precio-input").value.trim()
        const stockInput= document.getElementById("stock-input").value.trim()
        
        if(isNaN(precioInput) || isNaN(stockInput) || nombreInput ===""){
            alert("agrega todos los datos correspondientes")
            return;
        }
        
        const producto = new Producto(nombreInput,precioInput,stockInput)

        if(listaParaFiltrar.some((elemento)=> elemento.nombre === producto.nombre)){
        alert("el producto ya se encuentra en stock")
        return;
    }
    listaParaFiltrar.push(producto)
    })

    localStorage.setItem("productos", JSON.stringify(listaParaFiltrar));
    alert(`Se ha agregado el producto "${Producto.nombre}" a la lista.`);
    console.table(listaParaFiltrar);

    const container = document.createElement('div');
      container.classList.add('card-container');

      listaParaFiltrar.forEach((producto) => {
        const card = document.createElement('div');
        card.classList.add('card');
        const nombre = document.createElement('h2');
        nombre.textContent = producto.nombre;
        card.appendChild(nombre);
        const precio = document.createElement('p');
        precio.textContent = `Precio: ${producto.precio}`;
        card.appendChild(precio);
        const stock = document.createElement('p');
        stock.textContent = `Stock: ${producto.stock}`;
        card.appendChild(stock);
        container.appendChild(card);
      });

      const body = document.querySelector('body');
      body.appendChild(container);
      form.reset();
        body.appendChild(form);
}