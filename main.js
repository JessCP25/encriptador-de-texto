const resultado = document.querySelector('#result');

const encriptar = () => {
  const input = document.querySelector("#input");
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
  console.log(nuevoMensaje.join(""));
  resultado.value = nuevoMensaje.join("");
};

const desencriptar = () => {
  const input = document.querySelector("#input");
  let valor = input.value;

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

  console.log(valor);

  resultado.value = valor;
};
