// Animação de entrada
document.querySelectorAll(".animar, .fade").forEach((el, i) => {
    setTimeout(() => el.classList.add("mostrar"), i * 180);
});

// Copiar texto
function copiarTexto(texto) {
    navigator.clipboard.writeText(texto)
        .then(() => alert("Copiado: " + texto))
        .catch(() => alert("Erro ao copiar"));
}
