function listo(nombre, email, mensaje){
    if ((nombre.trim() === "") && (email.trim() === "") && (mensaje.trim() === "")){
        alert("Los campos están vacíos.")
    }else if (nombre.trim() === ""){
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
    let backToTopBtn = document.getElementById("subir-btn");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

const footer = document.querySelector("footer");
const fecha = new Date();
const pF = document.createElement("p");
pF.textContent = "Fecha actual: " + fecha.toLocaleDateString("es-ES");
footer.appendChild(pF);

function CambioTema(background, bg_url, bg_divs, fcolor){
    document.body.style.backgroundColor = background;
    document.body.style.backgroundImage = `url(${bg_url})`;
    document.getElementById('sobre-mi').style.backgroundColor = bg_divs;
    document.getElementById('proyectos').style.backgroundColor = bg_divs;
    document.getElementById('contacto').style.backgroundColor = bg_divs;
    document.getElementById('referencias').style.backgroundColor = bg_divs;
    document.querySelector('aside').style.color = fcolor;
    document.querySelector('footer').style.color = fcolor;
}