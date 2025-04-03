document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário antes da validação

        let nomeCliente = document.getElementById("nome-cliente").value.trim();
        let descricaoServico = document.getElementById("descricao-servico").value.trim();
        let urgencia = document.getElementById("urgencia").value;
        let endereco = document.getElementById("endereco").value.trim();
        let tecnico = document.getElementById("tecnico").value;
        
        let mensagemErro = "";

        if (nomeCliente === "") {
            mensagemErro += "- O campo Nome do Cliente é obrigatório.\n";
        }
        if (descricaoServico === "") {
            mensagemErro += "- O campo Descrição do Serviço é obrigatório.\n";
        }
        if (urgencia === "") {
            mensagemErro += "- O campo Urgência deve ser selecionado.\n";
        }
        if (endereco === "") {
            mensagemErro += "- O campo Endereço é obrigatório.\n";
        }
        if (tecnico === "") {
            mensagemErro += "- O campo Técnico deve ser selecionado.\n";
        }

        if (mensagemErro !== "") {
            alert("Por favor, corrija os seguintes erros:\n" + mensagemErro);
        } else {
            alert("Formulário enviado com sucesso!");
            this.submit(); // Submete o formulário após validação
        }
    });
});