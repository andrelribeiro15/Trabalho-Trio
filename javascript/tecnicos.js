document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário antes da validação

        let nome = document.getElementById("nome").value.trim();
        let telefone = document.getElementById("telefone").value.trim();
        let email = document.getElementById("email").value.trim();
        let matricula = document.getElementById("matricula").value.trim();
        let cargo = document.getElementById("cargo").value.trim();
        
        let mensagemErro = "";

        if (nome === "") {
            mensagemErro += "- O campo Nome é obrigatório.\n";
        }
        if (telefone === "") {
            mensagemErro += "- O campo Telefone é obrigatório.\n";
        } else if (!/^\d{2} \d{5}-\d{4}$/.test(telefone)) {
            mensagemErro += "- O Telefone deve estar no formato XX XXXXX-XXXX.\n";
        }
        if (email === "") {
            mensagemErro += "- O campo Email é obrigatório.\n";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            mensagemErro += "- O Email informado não é válido.\n";
        }
        if (matricula === "") {
            mensagemErro += "- O campo Matrícula é obrigatório.\n";
        }
        if (cargo === "") {
            mensagemErro += "- O campo Cargo é obrigatório.\n";
        }

        if (mensagemErro !== "") {
            alert("Por favor, corrija os seguintes erros:\n" + mensagemErro);
        } else {
            alert("Cadastro realizado com sucesso!");
            this.submit(); // Submete o formulário após validação
        }
    });
});