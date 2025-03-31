      /* Estilizando a trilha Musical da página  */

      document.addEventListener("DOMContentLoaded", function(){
        let audio = document.getElementById("trilha");
        let button = document.getElementById("botao");

        //Tentar iniciar a música auatomaticamente...
        audio.play().catch(error =>{
            console.log("Autoplay Bloqueado", error)
        });

        button.addEventListener("click", function(){
            if(audio.paused){
                  audio.play()
                  button.textContent="Pausar Trilha"
            }else{
                  audio.pause()
                  button.textContent="Tocar Trilha"
            }
        })
      })

      /* Estilizando a apresentação do sorteio de moedas  */

        let numeroSorteado = 0; //variável global...
        

      function sortearNumero(min, max){
        return Math.floor(Math.random()*(max - min +1)) + min
      }

      function realizarSorteio(){
        numeroSorteado = sortearNumero(10, 101)
        document.getElementById("resultado").innerText = "Parabéns seu AVATAR Kid possui " + numeroSorteado + " Vitórias... "
      }

      /* Estilizando o fechamento e a abertura das JANELAS MODAIS  */

      function abrirModal(id) {
        const modal = document.getElementById(id);
        modal.classList.add('abrir');
      }
    
      function fecharModal(id) {
          const modal = document.getElementById(id);
          if (modal) {
              modal.classList.remove('abrir');
          }
      }
      
     // Variáveis globais para armazenar os dados do oponente
    let oponenteNome = "";
    let oponenteNivel = "";
    let oponenteVitorias = 0;

    function escolherOponente(id, nome, vitorias, nivel) {
        let infoDiv = document.getElementById(id);

        if (!infoDiv) {
            console.error(`Elemento com ID "${id}" não encontrado.`);
            return;
        }

        // Armazena as informações do oponente globalmente
        oponenteNome = nome;
        oponenteNivel = nivel;
        oponenteVitorias = vitorias;

        // Atualiza o HTML com os dados do oponente
        infoDiv.innerHTML = `
            <div class="content_info">
                <p><strong>Oponente:</strong> ${nome}</p>
                <p><strong>Vitórias:</strong> ${vitorias}</p>
                <p><strong>Nível:</strong> ${nivel}</p>
            </div>
            <button class="fechar_oponente" onclick="fecharOponente('${id}')">X</button>
        `;

        infoDiv.classList.add("abrir");
    }

    
    // Função para fechar o oponente ao clicar no "X"
    function fecharOponente(id) {
        let infoDiv = document.getElementById(id);
        
        if (!infoDiv) {
            console.error(`Elemento com ID "${id}" não encontrado.`);
            return;
        }
    
        infoDiv.classList.remove("abrir");
    
        // Em vez de limpar tudo, só oculta a div
        let content = infoDiv.querySelector(".content_info");
        if (content) {
            content.innerHTML = "";
        }
    }
    

    // Determinando e finalizando as partidas... 
    function resolverDisputa(btn, oponenteNome, oponenteVitorias, oponenteNivel) {
        // Encontrar a div ".oponente" mais próxima do botão clicado
        let oponenteDiv = btn.closest(".oponente");
    
        if (!oponenteDiv) {
            console.error("Div do oponente não encontrada.");
            return;
        }
    
        // Buscar os elementos específicos dentro dessa div
        let disputadoElem = oponenteDiv.querySelector("#disputado");
        let disputadoConcluidoElem = oponenteDiv.querySelector("#disputado_concluido");
    
        if (!disputadoElem || !disputadoConcluidoElem) {
            console.error("Elementos '.disputado' ou '.disputado_concluido' não encontrados.");
            return;
        }
    
        // Exibir os elementos ocultos
        disputadoElem.style.display = "block";
        disputadoConcluidoElem.style.display = "block";
    
        if (numeroSorteado < oponenteVitorias) {
            disputadoElem.innerText = 
                "OPS!... Seu avatar não foi páreo... Nosso gladiador Kids possui apenas " + numeroSorteado + " Vitórias...";
    
            disputadoConcluidoElem.innerText = 
                "NOSSO MONSTRINHO " + oponenteNome + " VENCEU... Acumule mais recompensas e escolha um vilão com o mesmo nível de vitórias!...";
        }
        else if (numeroSorteado == oponenteVitorias) {
            disputadoElem.innerText = 
                "QUASE!... Temos um empate... Seu gladiador Kids possui " + numeroSorteado + " Vitórias...";
    
            disputadoConcluidoElem.innerText = 
                "NOSSO MONSTRINHO " + oponenteNome + " pode ser vencido fácil... Acumule mais recompensas!...";
        }
        else if (numeroSorteado > oponenteVitorias) {
            disputadoElem.innerText = 
                "PARABÉNS!... SEU AVATAR É O CAMPEÃO com " + numeroSorteado + " Vitórias... E mais experiente!";
    
            disputadoConcluidoElem.innerText = 
                "Agora seu NÍVEL É " + oponenteNivel + "... Acumule mais recompensa até se tornar um imortal!...";
        }else if(numeroSorteado == 100){
            disputadoElem.innerText = 
                "PARABÉNS!... SEU AVATAR É O CAMPEÃO SUPREMO DO TORNEIO com " + numeroSorteado + " Vitórias!";
     
            disputadoConcluidoElem.innerText = 
                "Agora seu NÍVEL É " + oponenteNivel + "... VOCÊ É UM CAMPEÃO INVICTO!...";
        }
    }
    




    /*
    function resolverDisputa() {
        let disputadoElem = document.getElementById("disputado");
        let disputadoConcluidoElem = document.getElementById("disputado_concluido");
    
        if (!disputadoElem || !disputadoConcluidoElem) {
            console.error("Elementos 'disputado' ou 'disputado_concluido' não encontrados no DOM.");
            return;
        }
    
        // Exibir os elementos ocultos
        disputadoElem.style.display = "block";
        disputadoConcluidoElem.style.display = "block";
    
        if (numeroSorteado < oponenteVitorias) {
            disputadoElem.innerText = 
                "OPS!... Seu avatar não foi páreo... Nosso gladiador Kids possui apenas " + numeroSorteado + " Vitórias...";
    
            disputadoConcluidoElem.innerText = 
                "NOSSO MONSTRINHO " + oponenteNome + " VENCEU... Acumule mais recompensas e escolha um vilão com o mesmo nível de vitórias!...";
        }
        else if (numeroSorteado == oponenteVitorias) {
            disputadoElem.innerText = 
                "QUASE!... Temos um empate... Seu gladiador Kids possui " + numeroSorteado + " Vitórias...";
    
            disputadoConcluidoElem.innerText = 
                "NOSSO MONSTRINHO " + oponenteNome + " pode ser vencido fácil... Acumule mais recompensas!...";
        }
        else if (numeroSorteado > oponenteVitorias) {
            disputadoElem.innerText = 
                "PARABÉNS!... SEU AVATAR É O CAMPEÃO com " + numeroSorteado + " Vitórias... E mais experiente!";
    
            disputadoConcluidoElem.innerText = 
                "Agora seu NÍVEL É " + oponenteNivel + "... Acumule mais recompensa até se tornar um imortal!...";
        }
    }
    */