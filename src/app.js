document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const output = document.querySelector(".output");

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const command = input.value;
      const letras = ["a", "e", "i", "o", "u"];
      let encript = "";

      for (let i = 0; i < command.length; i++) {
        if (letras.includes(command[i])) {
          switch (command[i]) {
            case "a":
              encript += "ai";
              break;
            case "e":
              encript += "enter";
              break;
            case "i":
              encript += "imes";
              break;
            case "o":
              encript += "ober";
              break;
            case "u":
              encript += "ufat";
              break;
          }
        } else {
          encript += command[i];
        }
      }

      output.innerHTML += `<div><span class="prompt">$</span> ${command}</div>`;
      input.value = "";

      const response = `Texto encriptado: ${encript}`;
      output.innerHTML += `<div>${response}</div>`;

      output.scrollTop = output.scrollHeight;
    }
  });
});
