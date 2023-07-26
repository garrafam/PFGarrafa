
const ArrayDeProductos = [];
let ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

let idUniversal = 1;

class Producto {
    constructor(id, nombre, precio, descripcion, categoria, url) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.url = url;
        
    }
}

const Escoba = new Producto(idUniversal++, "Escoba sin pelos", 300, "escoba para barrer pisos limpios", "Escobas", "../multimedia/escobas.jpg");
ArrayDeProductos.push(Escoba);
const Escoba1 = new Producto(idUniversal++, "Escoba sin pelos", 400, "escoba para barrer pisos limpios", "Escobas", "../multimedia/escobas.jpg");
ArrayDeProductos.push(Escoba1);


const aerosol = new Producto(idUniversal++, "Aromatizador saphirus", 1500, "aromatizador para hogar", "aromatizacion", "../multimedia/aerosol.jpg");
ArrayDeProductos.push(aerosol);

const perfumina = new Producto(idUniversal++, "Perfumina saphirus", 1500, "perfumina para ropa", "aromatizacion", "../multimedia/perfumina.jpg");
ArrayDeProductos.push(perfumina);

const Mate = new Producto(idUniversal++, "Mate 3d", 1500, "Mates personalizados", "3d", "../multimedia/Mates3d.jpg");
ArrayDeProductos.push(Mate);

const esponjaAcero1 = new Producto(idUniversal++, "Esponjas de acero", 400, "esponjas de acero chicas", "Limpieza", "../multimedia/esponjasAcero.jpg");
ArrayDeProductos.push(esponjaAcero1);

const esponjaLavaPlatos = new Producto(idUniversal++, "Esponjas", 300, "esponjas con abrasivo chico", "Limpieza", "../multimedia/esponjas.jpg");
ArrayDeProductos.push(esponjaLavaPlatos);


console.log (ArrayDeProductos)
let productoEncontrado = [];
const app = document.querySelector("#app");
const buttonHeader = document.querySelector("#header_button");
let input = document.querySelector("#search")
const volver = document.querySelector("#boton")
const redirigir = () => {
    location.href = "principal/carrito.html"
  
}

 function calcularTotal(ArrayCarrito) {
    return ArrayCarrito.reduce((total, el) => {
        return total + (el.precio * el.cantidad);
    }, 0);
}
let total = calcularTotal(ArrayCarrito);
 
//buscar
input.addEventListener("input", (e) => {
    productoEncontrado = ArrayDeProductos.filter(el => el.nombre === e.target.value)
    
})
input = addEventListener("keypress", (e) => {
   (e.key === "Enter" && productoEncontrado) &&  console.log(productoEncontrado);
 app.innerHTML = ''
productoEncontrado.forEach((el) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML = ` 
                    <div class="tarjeta_image"><img src="${el.url}" alt=""/></div>
                    <div class="tarjeta_informacion">
                        <span class="tarjeta_nombre">${el.nombre}</span>
                        <span class="tarjeta_precio">$${el.precio}</span>
                    </div>
    `
    const buttonAgregar = document.createElement("button");
    buttonAgregar.innerText = "Agregar";
    buttonAgregar.addEventListener("click", () => {
        ArrayCarrito.push(el);
        localStorage.setItem("carrito", JSON.stringify(ArrayCarrito))
    })
    tarjeta.appendChild(buttonAgregar);
    app.appendChild(tarjeta);
})
})

   buttonHeader.addEventListener("click", () => {
   
        app.innerHTML = ''
        ArrayCarrito.forEach(el => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta");
            tarjeta.innerHTML = ` 
                        <div class="tarjeta_image"><img src="${el.url}" alt=""/></div>
                        <div class="tarjeta_informacion">
                            <span class="tarjeta_nombre">${el.nombre}</span>
                            <span class="tarjeta_precio">$${el.precio}</span>
                            </div>
                            <div>
                            <span class="tarjeta_nombre">Cantidad ${el.cantidad}</span>
                            <span class="tarjeta_precio">${el.nombre}</span>
                        </div>
        `
      
    
            const buttonQuitar = document.createElement("button");
            buttonQuitar.innerText = "Quitar";
            buttonQuitar.addEventListener("click", (e) => {
                e.target.parentNode.remove();
                ArrayCarrito = ArrayCarrito.filter(e => e.id != el.id); console.log(ArrayCarrito)
                localStorage.setItem("carrito", JSON.stringify(ArrayCarrito))
            })             
            tarjeta.appendChild(buttonQuitar)
            app.appendChild(tarjeta);
            volver.innerText = "volver";
            volver.addEventListener("click", () => {
            location.href = "carrito.html" 
            })
            
        })
   })
           
    
    //tarjetas de array de productos
ArrayDeProductos.forEach((el) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML = ` 
                    <div class="tarjeta_image"><img src="${el.url}" alt=""/></div>
                    <div class="tarjeta_informacion">
                        <span class="tarjeta_nombre">${el.nombre}</span>
                        <span class="tarjeta_precio">$${el.precio}</span>
                        
                    </div>
    `
    const buttonAgregar = document.createElement("button");
    buttonAgregar.innerText = "Agregar";
    buttonAgregar.addEventListener("click", () => {
        
       Toastify({
            text: "Agregaste un producto a tu carrito",
            duration: 3000,           
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
              borderRadius: "15px"
            },
            onClick: function(){} // Callback after click
          }).showToast();   
        
       
      if (ArrayCarrito.some (e=>e.id==el.id)) {
        ArrayCarrito.find(e=>e.id==el.id).cantidad++;console.log(el);
      }else{
        ArrayCarrito.push({...el,cantidad:1}); ;console.log(ArrayCarrito);
               
      
      } 
      //calcularTotal (el);
       localStorage.setItem("carrito", JSON.stringify(ArrayCarrito));  
      
    });
    //calcularTotal (el);
    tarjeta.appendChild(buttonAgregar);
    app.appendChild(tarjeta);
    volver.innerText = "buscar";
    volver.addEventListener("click", () => {
     input
    })
 })
 
   
 
 console.log(`El total del carrito es: ${total}`); 
 