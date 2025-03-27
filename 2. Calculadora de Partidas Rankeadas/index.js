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

     function criarRanking(){
          let vitoria = numeroSorteado;
          let torneio = 100;

          ranking = torneio - vitoria;
          if(ranking <=10){ 
               document.getElementById("rank").innerText = "Possui "+ vitoria +" vitórias, portanto seu Rank é FERRO!..."
          }else if( ranking > 10 && ranking <= 20 ){
               document.getElementById("rank").innerText = "Possui "+ vitoria +" vitórias, portanto seu Rank é BRONZE!..."
          }else if( ranking > 20 && ranking <= 50 ){
               document.getElementById("rank").innerText = "Possui "+ vitoria +" vitórias, portanto seu Rank é PRATA!..."
          }else if( ranking > 50 && ranking <= 80){
               document.getElementById("rank").innerText = "Possui "+ vitoria +" vitórias, portanto seu Rank é OURO!..."
          }else if( ranking > 80 && ranking <= 90){
               document.getElementById("rank").innerText = "Possui "+ vitoria +" vitórias, portanto seu Rank é DIAMANTE!..."
          }else if( ranking > 90 && ranking <= 100){
               document.getElementById("rank").innerText = "Possui "+ vitoria +" vitórias, portanto seu Rank é PLATINA!..."
          }else{
               document.getElementById("rank").innerText = "Possui "+ vitoria +" VOCÊ É IMORTAL!... Venceu todas as disputas do Torneio de Gladiadores KIDS!... "
          }
     }

     function escolherOponente(nome, vitorias, nivel){
          let infoDiv = document.getElementById("info");
            infoDiv.innerHTML = `
                <p><strong>Oponente:</strong> ${nome}</p>
                <p><strong>Vitórias:</strong> ${vitorias}</p>
                <p><strong>Nível:</strong> ${nivel}</p>
            `;
            document.getElementById("fechar-oponente").addEventListener("click", () => {
               fecharOponente("info"); // Passa o ID do infoDiv para esconder
           });
            
     }
     function fecharOponente(id) {
          document.getElementById(id).classList.remove("abrir");
      }

     