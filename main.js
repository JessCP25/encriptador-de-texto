const resultado = document.querySelector("#result");
const inputVacio = document.querySelector('#result--vacio');
const inputMensaje = document.querySelector('#result--mensaje');
const mensajeError = document.querySelector('#mensajeError');

const encriptar = () => {
  const input = document.querySelector("#input");

  // LIMPIAR RESULTADO
  resultado.value = ''
  mensajeError.textContent = '';

  // QUITAR ESPACIOS

  const valorInput = input.value.trim();
  
  // VERIFICA SI SOLO SON MINÚSCULAS - CARACTERES - ACENTOS - VACIO
  if (!verificar(valorInput)) return;
  
  inputMensaje.classList.remove('inactive');
  inputVacio.classList.add('inactive');
  
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

  // LIMPIAR RESULTADO
  resultado.value = ''
  mensajeError.textContent = '';
  
  // QUITAR ESPACIOS
  let valor = input.value.trim();

  // VERIFICA SI SOLO SON MINÚSCULAS - CARACTERES - ACENTOS - VACIO
  if (!verificar(valor)) return;

  inputMensaje.classList.remove('inactive');
  inputVacio.classList.add('inactive');


  if (valor.includes("ai")) {
    valor = valor.replaceAll("ai", "a");
  }
  if (valor.includes("enter")) {
    valor = valor.replaceAll("enter", "e");
  }
  if (valor.includes("imes")) {
    valor = valor.replaceAll("imes", "i");
  }
  if (valor.includes("ober")) {
    valor = valor.replaceAll("ober", "o");
  }
  if (valor.includes("ufat")) {
    valor = valor.replaceAll("ufat", "u");
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
  if(input === ''){
    mensajeError.textContent = '*Necesita escribir el mensaje que desea encriptar o desencriptar.';
    inputMensaje.classList.add('inactive');
  inputVacio.classList.remove('inactive');
    return false;
  };
  const verificador = /^[a-z\s]+$/;
  if (!verificador.test(input)) {
    mensajeError.textContent = '*Recuerde que el mensaje no debe tener mayúsculas, acentos o caracteres especiales.';
    inputMensaje.classList.add('inactive');
  inputVacio.classList.remove('inactive');
    return false;
  };
  return true;
};