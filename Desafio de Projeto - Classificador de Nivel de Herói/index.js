    /**Janela Modal  */
    function abrirModal() {
        document.getElementById("meuModal").style.display = "block";
    }

    function fecharModal() {
        document.getElementById("meuModal").style.display = "none";
    }

/* Sorteio dos números de moedas */
    function sortearNumero(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function realizarSorteio() {
        const numeroSorteado = sortearNumero(1000, 10000);
        document.getElementById("resultado").innerText = numeroSorteado + " Moedas";
    }

