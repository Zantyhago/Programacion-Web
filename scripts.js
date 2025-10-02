function listo(nombre, email, mensaje){
    if (nombre.trim() === ""){
        alert("Se espera que ingrese su nombre.")
    } else if (email.trim() === ""){
        alert("Se espera que ingrese su e-mail.")
    } else if (mensaje.trim() === ""){
        alert("No se puede enviar un mensaje en blanco..")
    } else {
        alert("¡Mensaje enviado, " + nombre + "! Gracias por contactarte.")
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let backToTopBtn = document.getElementById("back-to-top-btn");

    // Mostrar / ocultar el botón al scrollear
    //window.addEventListener("scroll", () => {
      //  if (window.scrollY > 100) {
       //     backToTopBtn.classList.add("show");
        //} else {
          //  backToTopBtn.classList.remove("show");
        //}
    //});

    // Scroll suave al inicio
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


});

const footer = document.querySelector("footer");
const fecha = new Date();
const pF = document.createElement("p");
pF.textContent = "Fecha actual: " + fecha.toLocaleDateString("es-ES");
footer.appendChild(pF);