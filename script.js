
 /* o comando lê se existe alguma classe chamada "paginaSteam". quando clicar no botão quem contem essa classe (esse sendo o evento: .addEventListener) ele abrirá uma nova página (._blank) com o link do jogo para download. */

document.getElementById("paginaSteam").addEventListener("click", function() {
    window.open("https://store.steampowered.com/app/1569580/Blue_Prince/", "_blank");
});