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