// Seleção dos elementos
var SetaDireita = document.getElementById("setadireita")
var leonardo = document.getElementById("leonardo");
var samantha = document.getElementById("samantha");
var bruna = document.getElementById("bruna");
var SetaEsquerda = document.getElementById("seta-esquerda")


function RolarParaDireita() {
    leonardo.style.display = "none";
    bruna.style.display = "flex";
    
    SetaDireita.style.display = "none"
    SetaEsquerda.style.display = "flex"

}

function RolarParaEsquerda() {
    leonardo.style.display = "flex";
    bruna.style.display = "none";
    
    SetaDireita.style.display = "flex"
    SetaEsquerda.style.display = "none"
}