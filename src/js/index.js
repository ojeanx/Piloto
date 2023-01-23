const botaoTrailer = document.querySelector (".botao-trailer");
const botaoFecharModal = document.querySelector (".fechar-modal");
const video = document.getElementById ("video");
const modal = document.querySelector (".modal");
const linkDoVideo = video.src;

function alternarmodal () {
    modal.classList.toggle ("aberto");
}

botaoTrailer.addEventListener ("click", () => {
    alternarmodal ();
    video.setAttribute("src", linkDoVideo);
})

botaoFecharModal.addEventListener ("click", () => {
    alternarmodal ();
    video.setAttribute ("src", "" )
})



