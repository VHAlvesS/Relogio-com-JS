class Stopwatch {
  constructor() {
    // Elementos HTML
    this.hour = document.querySelector("#hours");
    this.history = document.querySelector(".history");
    this.buttons = document.querySelector(".controls");
    this.hours;

    // Atributos
    this.counter = false;

    // EventListeners

    this.buttons.addEventListener("click", this.clockInit.bind(this));
  }

  // Metodos

  clockInit = function (e) {
    console.log(e.target);

    if (e.target.textContent === "Start") {
      this.start();
    }

    if (e.target.textContent === "Stop") {
      this.counter = false;
    }

    if (e.target.textContent === "Lap") {
      this.lapCounter();
    }

    if (e.target.textContent === "Restart") {
      this.restart();
    }

    if (e.target.textContent === "Clear laps") {
      this.resetLaps();
    }
  };
  start = function () {
    this.counter = true;

    let contador = 0;

    if (!this.hours && this.hours !== 0) {
      const intervalId = setInterval(() => {
        if (!this.counter) {
          clearInterval(intervalId);
        }
        console.log(`Um segundo passou. Contador: ${contador}`);
        if (this.counter) {
          contador++;
          this.hours = contador;
          this.hour.textContent = `${this.segundosParaHoras(contador)}`;
        }
      }, 1000);
    } else {
      contador = this.hours;
      const intervalId = setInterval(() => {
        if (!this.counter) {
          clearInterval(intervalId);
        }
        console.log(`Um segundo passou. Contador: ${contador}`);
        if (this.counter) {
          contador++;
          this.hours = contador;
          this.hour.textContent = `${this.segundosParaHoras(contador)}`;
          console.log(contador);
        }
      }, 1000);
    }
  };

  lapCounter = function () {
    let spanElement = document.createElement("span");
    // Definir o conteúdo do span como o conteúdo do elemento 'hour'
    spanElement.textContent = this.hour.textContent;
    // Adicionar o span ao corpo do documento (ou a outro local desejado)
    this.history.appendChild(spanElement);
  };
  segundosParaHoras(segundos) {
    const data = new Date(segundos * 1000); // Multiplica por 1000 para converter segundos em milissegundos
    return data.toLocaleTimeString("pt-BR", { timeZone: "UTC" });
  }
  restart = function () {
    this.hours = 0;
    this.hour.textContent = "00:00:00";
  };
  resetLaps = function () {
    this.history.innerHTML = "";
  };
}

const clock = new Stopwatch();
