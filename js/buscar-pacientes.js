var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener('click',() => {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:3000/pacientes");
    
    xhr.addEventListener("load", () => {

        if(xhr.status == 200) {
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach((paciente) => {
            adicionaPacienteNaTabela(paciente)
        });
        } else {
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel")
            erroAjax.classList.add("mensagens-erro")
        }
    })

    xhr.send()
})