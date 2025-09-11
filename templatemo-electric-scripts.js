// avançar com a tecla espaço
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault(); // evita scroll da página
    mostrarMensagem(); // mesma função do botão "Próximo"
  }
});
