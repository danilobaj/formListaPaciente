var pacientes = document.querySelectorAll(".paciente")


var tabela = document.querySelector("table")

tabela.addEventListener('dblclick', function(event) {
    // localizando o even
    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;
    if(event.target.tagName == 'TD') {
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(() => {
        event.target.parentNode.remove();
        }, 500);
    }
})
    

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function() {
//         this.remove();
//     })
// })