const resultado = document.querySelector("#result");
const inputVacio = document.querySelector('#result--vacio');
const inputMensaje = document.querySelector('#result--mensaje');

const encriptar = () => {
  const input = document.querySelector("#input");

  // QUITAR ESPACIOS

  const valorInput = input.value.trim();

  if(valorInput === '') return;

  inputMensaje.classList.remove('inactive');
  inputVacio.classList.add('inactive');

  // VERIFICA SI SOLO SON MINÚSCULAS - CARACTERES - ACENTOS
  if (!verificar(input.value)) return;
  
  let valor = input.value.split("");

  const nuevoMensaje = valor.map((letra) => {
    switch (letra) {
      case "a":
        return "ai";
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "o":
        return "ober";
      case "u":
        return "ufat";
      default:
        return letra;
    }
  });
  input.value = "";
  resultado.value = nuevoMensaje.join("");
};

const desencriptar = () => {
  const input = document.querySelector("#input");
  
  // QUITAR ESPACIOS
  let valor = input.value.trim();

  if(valor === '') return;

  inputMensaje.classList.remove('inactive');
  inputVacio.classList.add('inactive');

  // VERIFICA SI SOLO SON MINÚSCULAS - CARACTERES - ACENTOS
  if (!verificar(valor)) return;

  if (valor.includes("ai")) {
    valor = valor.replace("ai", "a");
  }
  if (valor.includes("enter")) {
    valor = valor.replace("enter", "e");
  }
  if (valor.includes("imes")) {
    valor = valor.replace("imes", "i");
  }
  if (valor.includes("ober")) {
    valor = valor.replace("ober", "o");
  }
  if (valor.includes("ufat")) {
    valor = valor.replace("ufat", "u");
  }

  input.value = "";

  resultado.value = valor;
};

const copiar = () => {
  resultado.select();

  document.execCommand("copy");
  resultado.setSelectionRange(0,0);
};

const verificar = (input) => {
  const verificador = /^[a-z]+$/;
  return verificador.test(input) ? true : false;
};