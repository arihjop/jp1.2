// Animação simples ao carregar a página
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Copiar texto de contato
function copiarTexto(texto) {
    navigator.clipboard.writeText(texto)
        .then(() => alert("Copiado: " + texto))
        .catch(() => alert("Erro ao copiar"));
}