const showAlbum = document.getElementById("showAlbum");
const showAutor = document.getElementById("showAutor");

function actualizarData() {
    document.querySelectorAll("li").forEach(li => {
        const a = li.querySelector("a");

        let span = a.querySelector(".numero");

        if (!span) {
            span = document.createElement("span");
            span.className = "numero";
            a.appendChild(span);
        }

        const album = li.dataset.album;
        const author = li.dataset.author;

        let texto = "";

        if (showAlbum.checked && album) {
            texto += ` (${album})`;
        }

        if (showAutor.checked && author) {
            texto += ` — ${author}`;
        }

        span.textContent = texto;
    });
}

showAlbum.addEventListener("change", actualizarData);
showAutor.addEventListener("change", actualizarData);

actualizarData();