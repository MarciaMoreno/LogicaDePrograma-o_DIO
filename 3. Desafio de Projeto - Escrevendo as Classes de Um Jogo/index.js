    /*ESTRUTURANSO a trilha musical da página */
    document.addEventListener("DOMContentLoaded", function(){
      let audio = document.getElementById("trilha");
      let button = document.getElementById("botao");

      //Tenta iniciar a música automaticamente... 
      audio.play().catch(error =>{
        console.log("Autoplay Bloqueado pelo Navegador...")
      });

      button.addEventListener("click", function(){
        if(audio.paused){
          audio.play();
          button.textContent = "Pausar Trilha";
        }else{
          audio.pause();
          button.textContent= "Tocar Trilha";
        }
      });
    });

    /**** Montando as Estruturas das JANELAS MODAIS... */
    function abrirModal(id){
      const modal = document.getElementById(id)
      modal.classList.add('abrir');
    }

    function fecharModal(id){
      const modal = document.getElementById(id)
      if(modal){
        modal.classList.remove('abrir');
      }
    }

     /**** Montando as funções de CONTEUDO DAS JANELAS... */
        /*Construindo a estrutura do heroi...     */
        class heroiMagico{
          constructor(id, tipo, nivel, ataque){
            this.id = id;
            this.tipo = tipo;
            this.nivel = nivel;
            this.ataque = ataque;
          }
        }
        // Criando um objeto
        const heroUm = new heroiMagico("Sirius","Guerreiro",2,"Lâmina Infinita de Orion")
        const heroDois = new heroiMagico("Mostargo","Mago",4,"Pedra do Poder Infinito")
        const heroTres = new heroiMagico("Lee san","Monge",3,"Bastão Flutuante")
        const heroQuatro = new heroiMagico("Kitsu","Ninja",1,"Katana do destino sombrio")

         // Pegando a div pelo ID
         const heroiDiv1 = document.getElementById("heroiInfo1");
         const heroiDiv2 = document.getElementById("heroiInfo2");
         const heroiDiv3 = document.getElementById("heroiInfo3");
         const heroiDiv4 = document.getElementById("heroiInfo4");

         heroiDiv1.innerHTML = `
            <h3>Herói Mágico</h3>
            <p><strong>ID:</strong> ${heroUm.id}</p>
            <p><strong>Tipo:</strong> ${heroUm.tipo}</p>
            <p><strong>Nível:</strong> ${heroUm.nivel}</p>
            <p><strong>Ataque:</strong> ${heroUm.ataque}</p>
        `;

        heroiDiv2.innerHTML = `
            <h3>Herói Mágico</h3>
            <p><strong>ID:</strong> ${heroDois.id}</p>
            <p><strong>Tipo:</strong> ${heroDois.tipo}</p>
            <p><strong>Nível:</strong> ${heroDois.nivel}</p>
            <p><strong>Ataque:</strong> ${heroDois.ataque}</p>
        `;

        heroiDiv3.innerHTML = `
            <h3>Herói Mágico</h3>
            <p><strong>ID:</strong> ${heroTres.id}</p>
            <p><strong>Tipo:</strong> ${heroTres.tipo}</p>
            <p><strong>Nível:</strong> ${heroTres.nivel}</p>
            <p><strong>Ataque:</strong> ${heroTres.ataque}</p>
        `;

        heroiDiv4.innerHTML = `
            <h3>Herói Mágico</h3>
            <p><strong>ID:</strong> ${heroiDiv4.id}</p>
            <p><strong>Tipo:</strong> ${heroiDiv4.tipo}</p>
            <p><strong>Nível:</strong> ${heroiDiv4.nivel}</p>
            <p><strong>Ataque:</strong> ${heroiDiv4.ataque}</p>
        `;

        /*Construindo a estrutura da arma do herói...     */
        class itemMagico {
          // Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
            constructor(tipoItem, danoItem, resistenciaItem) {
              this.tipoItem = tipoItem;
              this.danoItem = danoItem; 
              this.resistenciaItem = resistenciaItem;
            }          
            calcularDano() {
              return this.tipoItem === "arma" ? this.danoItem * 2 : this.danoItem;
            }
          }
      
      // Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
      const tipoItem = gets();
      const danoItem = parseInt(gets());
      const resistenciaItem = parseInt(gets());
      
      //TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
      let itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem  )
      // TODO: Imprima os atributos do item personalizado
      print("Tipo: " + itemPersonalizado.tipoItem);
      print("Dano: " + itemPersonalizado.danoItem);
      print("Resistencia: " + itemPersonalizado.resistenciaItem);
      
      // Calcula e imprime o dano causado pelo item personalizado em um combate simulado
      const danoTotal = itemPersonalizado.calcularDano();
      print("Dano em combate: " + danoTotal);