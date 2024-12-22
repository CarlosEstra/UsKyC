// Elementos de la página
const sobre = document.getElementById("sobre");
const candado = document.getElementById("candado-img");
const codigoInput = document.getElementById("codigo");
const abrirBtn = document.getElementById("abrirBtn");
const imagen = document.getElementById("imagen");
const titulo = document.getElementById("titulo");
const atrasBtn = document.getElementById("atrasBtn");

// Fecha correcta (puedes modificarla según lo desees)
const fechaCorrecta = "140223";

// Evento de clic en el botón "Abrir"
abrirBtn.addEventListener("click", function() {
  // Verificar si la fecha ingresada es correcta
  if (codigoInput.value === fechaCorrecta) {
    // Abrir el candado (con animación)
    candado.style.transform = "rotateY(180deg)";
    candado.style.backgroundColor = "#3d3d3d"; // El candado se abre visualmente

    // Desvanecer el título y ocultarlo
    titulo.style.opacity = "0";

    setTimeout(() => {
      // Abrir el sobre (con animación)
      sobre.classList.add("abierto");

      // Mostrar la imagen
      imagen.style.display = "block";

      // Mostrar el botón "Atrás"
      atrasBtn.style.display = "block";
    }, 500);
  } else {
    alert("Fecha incorrecta. Intenta de nuevo.");
  }
});

// Evento para el botón "Atrás"
atrasBtn.addEventListener("click", function() {
  // Restablecer el sobre a su estado inicial
  sobre.classList.remove("abierto");
  imagen.style.display = "none";
  candado.style.transform = "rotateY(0deg)";
  candado.style.backgroundColor = "#3d3d3d";
  codigoInput.value = ""; // Limpiar el campo de texto
  titulo.style.opacity = "1"; // Mostrar el título nuevamente

  // Ocultar el botón "Atrás"
  atrasBtn.style.display = "none";
});
