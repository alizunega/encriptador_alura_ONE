document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const output = document.querySelector(".output");

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const command = input.value;
      const letras = ["a", "e", "i", "o", "u"];
      let encript = "";
      console.log(command);
      for (i in command) {
        console.log(command[i]);
        console.log(encript);
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
              encritp += "ufat";
              break;
          }
          console.log(command);
        } else {
          encript += command[i];
        }
        console.log(encript);
      }

      /*
      La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
       */
      output.innerHTML += `<div><span class="prompt">$</span> ${encript}</div>`;
      input.value = "";

      // Simulate a command response
      const response = `Texto encriptado: ${encript}`;
      output.innerHTML += `<div>${response}</div>`;

      // Scroll to the bottom
      output.scrollTop = output.scrollHeight;
    }
  });
});
