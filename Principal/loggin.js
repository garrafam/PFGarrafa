

const baseDato =[
    {
    usuario: "Marcos",
    contraseña: "1234",
},
{
    usuario: "juan",
    contraseña: "1357",
}

]
 const user =
{
    usuario : "",
    contraseña :""
    
}


const inputs = document.querySelectorAll(".unico");
//const apps=document.querySelector("#loggeo")
console.log(inputs)
function redirigir() {
    location.href = "carrito.html";

}
inputs.forEach(el => { 
    el.addEventListener("input", (e)=>{
     
      
  if (e.target.name== "usuario" ) {
        user.usuario= e.target.value
    }
   
    if ( e.target.name== "contraseña"){
        user.contraseña=e.target.value
   }
   
    
})})

const loggeo= document.getElementById("enviar");
loggeo.addEventListener("click" , () =>{

   const usuarioEncontrado = baseDato.find (el=> el.usuario===user.usuario && el.contraseña===user.contraseña) 
   usuarioEncontrado ? redirigir (usuarioEncontrado) : alert ("no existe el usuario")
});//
//const entrar= document.querySelectorAll("#carr");
//console.log(entrar);
//function entro() {
//    location.href = "loggin.html";
//}
//entrar.addEventListener("click", (e)=>{
//    if (e.target.value===carrito){entro}
//    
//});
//
//let entrar =
//document.getElementById ("carr")
// entrar. addEventListener ("click", respuestaClick )
// function respuestaClick (){
// console. log("Respuesta evento ");
 //location.href = "Principal/loggin.html";
// }