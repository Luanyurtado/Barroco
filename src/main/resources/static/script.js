// Adiciona um evento ao formulário para capturar o envio
    document.getElementById("nameForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede que a página seja recarregada ao enviar o formulário

        let nome = document.getElementById("nome").value.trim(); // Obtém o nome digitado e remove espaços extras

        if (nome === "") {
            alert("Por favor, digite um nome válido!"); // Exibe um alerta caso o campo esteja vazio
            return;
        }

        localStorage.setItem("userName", nome); // Armazena o nome do usuário no LocalStorage

        window.location.href = "saudacao.html"; // Redireciona para a próxima página
    });