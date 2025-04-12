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
  /*Construindo a estrutura do heroi...    */
  let id = " ";
  let idArma = " ";
  class heroiMagico {
    constructor(id, tipo, nivel, ataque) {
      this.id = id;
      this.tipo = tipo;
      this.nivel = nivel;
      this.ataque = ataque;
    }
  }


// Criando os objetos
  const heroUm = new heroiMagico("Sirius", "Guerreiro", 2, "Lâmina Infinita de Orion");
  const heroDois = new heroiMagico("Mostargo", "Mago", 4, "Pedra do Poder Infinito");
  const heroTres = new heroiMagico("Lee san", "Monge", 3, "Bastão Flutuante");
  const heroQuatro = new heroiMagico("Kitsu", "Ninja", 1, "Katana do destino sombrio");

// Pegando as divs
  const div1 = document.getElementById("heroiInfo1");
  const div2 = document.getElementById("heroiInfo2");
  const div3 = document.getElementById("heroiInfo3");
  const div4 = document.getElementById("heroiInfo4");

  // Função para exibir o herói
  function exibirHeroi(div, heroi) {
    if (div){
      div.innerHTML = `
      <h3>Herói Mágico</h3>
      <p><strong>Nome:</strong> ${heroi.id}</p>
      <p><strong>Tipo:</strong> ${heroi.tipo}</p>
      <p><strong>Nível:</strong> ${heroi.nivel}</p>
      <p><strong>Ataque:</strong> ${heroi.ataque}</p>
      `;
    }
  }

// Exibir cada herói
  exibirHeroi(div1, heroUm);
  exibirHeroi(div2, heroDois);
  exibirHeroi(div3, heroTres);
  exibirHeroi(div4, heroQuatro);

  class armaMagica{
    constructor(idArma, nivelArma, ataqueArma){
      this.idArma = idArma;
      this.nivelArma = nivelArma;
      this.ataqueArma = ataqueArma;
    }
  }
    
  const armaUm = new armaMagica('Bastão Dourado', 100, 'Força Repelidora');
  const armaDois = new armaMagica('Cajado Mágico', 800, 'Transmite o desejo para a pedra do poder');
  const armaTres= new armaMagica('Escudo Solarium', 700, 'Bloqueio Universal de qualquer ataque');
  const armaQuatro = new armaMagica('Espada Estelar', 900, 'Lâmina Infinita de Orion');
  const armaCinco = new armaMagica('Katana Fujikan', 400, 'Corte das duas faces');
  const armaSeis = new armaMagica('Pedra do Poder Absoluto', 1000,'Realizador de desejos');

  const div5 = document.getElementById("armaInfo1");
  const div6 = document.getElementById("armaInfo2");
  const div7 = document.getElementById("armaInfo3");
  const div8 = document.getElementById("armaInfo4");
  const div9 = document.getElementById("armaInfo5");
  const div10 = document.getElementById("armaInfo6");

  function exibirArma(div, arma) {
    if (div){
      div.innerHTML = `
        <h3>Arma Mágica</h3>
        <p><strong>Nome:</strong> ${arma.idArma}</p>
        <p><strong>Nível:</strong> ${arma.nivelArma}</p>
        <p><strong>Ataque:</strong> ${arma.ataqueArma}</p>
        <button class="fechar-info" onclick="fecharInfo('${div.id}')">X</button>
      `;
    }
  }
  
  exibirArma(div5, armaUm);
  exibirArma(div6, armaDois);
  exibirArma(div7, armaTres);
  exibirArma(div8, armaQuatro);
  exibirArma(div9, armaCinco);
  exibirArma(div10, armaSeis);

  function mostrarInfo(id) {
    const infoDiv = document.getElementById(id);
    if (infoDiv) {
      infoDiv.style.display = 'block';
    }
  }
  
  function fecharInfo(id) {
    const infoDiv = document.getElementById(id);
    if (infoDiv) {
      infoDiv.style.display = 'none';
    }
  }

  function escolherArma(btn, id, idArma){
    let armaDiv = btn.closest(".arma");
    if (!armaDiv) {
        console.error("Div da arma não encontrada...");
        return;
    }

    let armaEscolhidaElem = armaDiv.querySelector("p[id^='arma_escolhida']");
    if (!armaEscolhidaElem) {
        console.error("Elemento de arma escolhida não encontrado...");
        return;
    }

    armaEscolhidaElem.style.display = "block";
    armaEscolhidaElem.innerHTML = ""; // Limpa antes de exibir

    let mensagem = "";
    let imagemSrc = "";

    if( id === heroTres && idArma === armaUm){
      mensagem = "Parabéns aventureiro!... Seu heroi está completo!... Agora viaje pelas galáxias e salve os mundos com o nosso Monge Intergalático...";
      imagemSrc = "Imagem/monge-completo.png";
    }
    else if(id === heroDois && idArma === armaDois){
      mensagem = "Parabéns aventureiro!... Seu heroi está completo!... Agora viaje pelas galáxias e salve os mundos com o nosso Mago Intergalático...";
      imagemSrc = "Imagem/mago-completo.png";
    }
    else if(id === heroUm && idArma === armaTres){
      mensagem = "Parabéns aventureiro!... Seu heroi está completo!... Agora viaje pelas galáxias e salve os mundos com o nosso Guerreiro Intergalático...";
      imagemSrc = "Imagem/guerreiro-completo.png";
    }
    else if( id === heroUm && idArma === armaQuatro){
      mensagem = "Parabéns aventureiro!... Seu heroi está completo!... Agora viaje pelas galáxias e salve os mundos com o nosso Guerreiro Intergalático...";
      imagemSrc = "Imagem/guerreiro-completo.png";
    }
    else if( id === heroQuatro && idArma === armaCinco){
      mensagem = "Parabéns aventureiro!... Seu heroi está completo!... Agora viaje pelas galáxias e salve os mundos com o nosso Ninja Intergalático...";
      imagemSrc = "Imagem/ninja-completo.png";
    }
    else if( id === heroDois && idArma === armaSeis){
      mensagem = "Parabéns aventureiro!... Seu heroi está completo!... Agora viaje pelas galáxias e salve os mundos com o nosso Mago Intergalático...";
      imagemSrc = "Imagem/mago-completo.png";
    }
    else{
      mensagem ="OPS!... Não foi dessa vez, seu guerreiro não sabe usar esta arma...";
    }

    armaEscolhidaElem.innerText = mensagem;
    if (imagemSrc) {
        const imagem = document.createElement("img");
        imagem.src = imagemSrc;
        imagem.alt = "Imagem do herói completo";
        imagem.width = 400;
        armaEscolhidaElem.appendChild(imagem);
    }
  }
  