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
        document.getElementById("resultado").innerText = "Parabéns você possui " + numeroSorteado + " Vitórias... "
      }


      function abrirModal(id) {
        const modal = document.getElementById(id);
        modal.classList.add('abrir');

        modal.addEventListener('click', (e) => {
            if (e.target.id == 'fechar' || e.target.id == id) {
                fecharModal(id);
            }
        });
      }

      function fecharModal(id) {
      document.getElementById(id).classList.remove('abrir');
      }


      /* Elaborando as funções que compoe o ranking...  */