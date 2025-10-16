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
    let VolverBtn = document.getElementById("subir-btn");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            VolverBtn.classList.add("show");
        } else {
            VolverBtn.classList.remove("show");
        }
    });
    VolverBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.querySelectorAll("#desplegar-btn").forEach((boton) => {
    boton.addEventListener("click", () => {
        const descr = boton.nextElementSibling;
        descr.classList.toggle("show");
        if(descr.classList.contains("show")){
            boton.textContent = "Ocultar";
        }else{
            boton.textContent = "Mostrar";}
        });
    });

    let TemaBtn = document.getElementById("tema-btn");
    TemaBtn.addEventListener("click", () => {
        document.querySelectorAll(".oscuroso").forEach(elemento => {
            elemento.classList.toggle("oscuro");
               if(elemento.classList.contains("oscuro")){
                TemaBtn.style.backgroundImage = "url('img/sol.jpg')";
               }else{
                TemaBtn.style.backgroundImage = "url('img/luna.jpg')";
               }
        });
    });
 
});

    const footer = document.querySelector("footer");
    const fecha = new Date();
    const pF = document.createElement("p");
    pF.textContent = "Fecha actual: " + fecha.toLocaleDateString("es-ES");
    footer.appendChild(pF);



    ///document.getElementById('descr').style.color = fcolor;
    ///document.querySelector('aside').style.color = fcolor;
    ///document.querySelector('footer').style.color = fcolor;