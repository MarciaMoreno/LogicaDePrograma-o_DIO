

/* Sorteio dos números de moedas */
    function sortearNumero(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function realizarSorteio() {
        const numeroSorteado = sortearNumero(1000, 10000);
        document.getElementById("resultado").innerText = numeroSorteado + " Moedas";
    }

/**** Trabalhando os modais  */

    // Obter elementos da página
    const modal = document.getElementById("myModal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementById("closeBtn");

    // Abrir a modal quando o botão for clicado
    openModalBtn.onclick = function() {
        modal.style.display = "block";
    }

    // Fechar a modal quando o botão de fechar for clicado
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Fechar a modal se o usuário clicar fora da janela modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }