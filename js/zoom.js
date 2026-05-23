const slider = document.getElementById("zoom-slider");
const number = document.getElementById("zoom-number");

function actualizarZoom(valor) {

    document.documentElement.style
        .setProperty("--zoom-ritmos", valor);

    slider.value = valor;
    number.value = valor;
}

slider.addEventListener("input", () => {
    actualizarZoom(slider.value);
});

number.addEventListener("input", () => {
    actualizarZoom(number.value);
});