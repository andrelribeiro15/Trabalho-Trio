document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário antes da validação

        let username = document.querySelector("input[name='username']").value.trim();
        let password = document.querySelector("input[name='password']").value.trim();

        // Simulação de um banco de dados de usuários cadastrados
        let usuariosCadastrados = [
            { username: "admin", password: "123456" },
            { username: "tecnico1", password: "senha123" }
        ];

        let usuarioEncontrado = usuariosCadastrados.find(user => user.username === username && user.password === password);

        if (!usuarioEncontrado) {
            alert("Usuário ou senha incorretos.");
        } else {
            alert("Login bem-sucedido!");
            window.location.href = '../index.html'; // Redireciona após o login
        }
    });
});
