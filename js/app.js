const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
  // Cuando agregas un curso presionando "Agregar al carrito"
  listaCursos.addEventListener("click", agregarCurso);
}

//Funciones
function agregarCurso($event) {
  $event.preventDefault();
  if ($event.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = $event.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

function leerDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  articulosCarrito = [...articulosCarrito, infoCurso];

  console.log(articulosCarrito);

  carritoHTML();
}

function carritoHTML() {
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            ${curso.titulo}
        </td>
        `;

        contenedorCarrito.appendChild(row);
    })
}
