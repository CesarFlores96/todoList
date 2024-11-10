import { Usuario } from "./obj/Usuarios.js";

const arrayUsuarios = [];
function BorrarTexto() {
  let txtresultado = document.getElementById("txtresultado");
  txtresultado.value = "0";
}

function InsertarValor(valor) {
  let txtresultado = document.getElementById("txtresultado");
  let ultimoCaracter = txtresultado.value.slice(-1);

  if (/[+\-X/]/.test(valor) && /[+\-X/]/.test(ultimoCaracter)) {
    return;
  }

  if (txtresultado.value === "0" && !/[+\-X/]/.test(valor)) {
    txtresultado.value = valor;
  } else {
    txtresultado.value += valor;
  }
}

function MostrarResultado() {
  let txtresultado = document.getElementById("txtresultado").value;
  txtresultado = txtresultado.replace(/([+\-X/]){2,}/g, "$1");
  txtresultado = txtresultado.replace(/X/g, "*");
  try {
    let resultado = eval(txtresultado);
    document.getElementById("txtresultado").value = resultado;
  } catch (error) {
    document.getElementById("txtresultado").value = "Error";
  }
}

function limpiarCasilleros() {
  let nombres = document.getElementById("nombres");
  let apellidos = document.getElementById("apellidos");
  let usuario = document.getElementById("usuario");
  let contraseña = document.getElementById("contraseña");

  nombres.value = "";
  apellidos.value = "";
  usuario.value = "";
  contraseña.value = "";

  console.log("Campos limpiados");
}

function GuardarDato() {
  let tarjetalista = document.getElementById("tarjetalista");
  tarjetalista.style.display = "block";
  let nombres = document.getElementById("nombres").value;
  let apellidos = document.getElementById("apellidos").value;
  let user = document.getElementById("usuario").value;
  let contraseña = document.getElementById("contraseña").value;

  const obj = new Usuario(nombres, apellidos, user, contraseña);
  arrayUsuarios.push(obj);
  console.log(arrayUsuarios);
  limpiarCasilleros();
  mostrarUsuarios();
}

function mostrarUsuarios() {
  const container = document.querySelector(".card-todo-list");

  container.innerHTML = "";

  arrayUsuarios.forEach((usuario) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="flex flex-col gap-2 text-[10px] sm:text-xs z-50 my-2">
      <div class="error-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]">
        <div class="flex gap-2 items-center">
          <div class="flex items-center justify-center text-[#d65563] bg-white/5 backdrop-blur-xl p-1 rounded-lg w-8 h-8">
            <!-- Icono de check -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#11b614" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
          </div>
          <div class="overflow-hidden">
            <p class="text-white truncate">${usuario.nombres} ${usuario.apellidos}</p>
            <p class="text-gray-500 truncate">Usuario: ${usuario.usuario}</p>
            <p class="text-gray-500 truncate">Contraseña: ${usuario.contraseña}</p>
          </div>
        </div>
        <button class="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  `;

    container.appendChild(card);
  });
}

window.BorrarTexto = BorrarTexto;
window.InsertarValor = InsertarValor;
window.MostrarResultado = MostrarResultado;
window.GuardarDato = GuardarDato;
