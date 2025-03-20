

/* Sorteio dos números de moedas */
    function sortearNumero(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function realizarSorteio() {
        const numeroSorteado = sortearNumero(1000, 10000);
        document.getElementById("resultado").innerText = numeroSorteado + " Moedas";
    }

/**** Trabalhando os modais  */

     // Pegando os elementos
     var modal = document.getElementById("myModal");
     var btn = document.getElementById("openModal");
     var span = document.getElementsByClassName("close")[0];

     // Abrir o modal
     btn.onclick = function() {
         modal.style.display = "block";
     }

     // Fechar o modal ao clicar no "X"
     span.onclick = function() {
         modal.style.display = "none";
     }

     // Fechar ao clicar fora do modal
     window.onclick = function(event) {
         if (event.target == modal) {
             modal.style.display = "none";
         }
     }