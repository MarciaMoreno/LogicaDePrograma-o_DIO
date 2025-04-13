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



/**** Montando a Estrutura  da JANELA MODAL... */
  let heroiSelecionado = " ";

  function abrirModal(id){
    const modal = document.getElementById(id)
      modal.classList.add('abrir');

      // Associa o herói à janela modal correspondente
    if(id === 'janela-modal1') {
      heroiSelecionado = heroUm;
    }
    else if(id === 'janela-modal2'){
      heroiSelecionado = heroDois;
    }
    else if(id === 'janela-modal3'){
      heroiSelecionado = heroTres;
    }
    else if(id === 'janela-modal4'){
      heroiSelecionado = heroQuatro;
    }
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
  const armaDois = new armaMagica('Escudo e Espada Intergalática Solarium', 700, 'Bloqueio Universal de qualquer ataque e Lâmina Infinita de Orion');
  const armaTres= new armaMagica('Katana Fujikan', 400, 'Corte das duas faces');
  const armaQuatro = new armaMagica('Cajado Mágico e Pedra do Poder Absoluto', 800, 'Transmite o desejo para a pedra do poder');
  


  const div5 = document.getElementById("armaInfo1");
  const div6 = document.getElementById("armaInfo2");
  const div7 = document.getElementById("armaInfo3");
  const div8 = document.getElementById("armaInfo4");
  const div9 = document.getElementById("armaInfo5");
  const div10 = document.getElementById("armaInfo6");
  const div11 = document.getElementById("armaInfo7"); 
  const div12 = document.getElementById("armaInfo8");
  const div13 = document.getElementById("armaInfo9");
  const div14 = document.getElementById("armaInfo10");
  const div15 = document.getElementById("armaInfo11");
  const div16 = document.getElementById("armaInfo12");
  const div17 = document.getElementById("armaInfo13");
  const div18 = document.getElementById("armaInfo14");
  const div19 = document.getElementById("armaInfo15");
  const div20 = document.getElementById("armaInfo16");


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
  exibirArma(div9, armaUm);
  exibirArma(div10, armaDois);
  exibirArma(div11, armaTres);
  exibirArma(div12, armaQuatro);
  exibirArma(div13, armaUm);
  exibirArma(div14, armaDois);
  exibirArma(div15, armaTres);
  exibirArma(div16, armaQuatro);
  exibirArma(div17, armaUm);
  exibirArma(div18, armaDois);
  exibirArma(div19, armaTres);
  exibirArma(div20, armaQuatro);
 


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

  function fecharEscolha(id) {
    let infoDiv = document.getElementById(id);
    
    if (!infoDiv) {
        console.error(`Elemento com ID "${id}" não encontrado.`);
        return;
    }

    infoDiv.classList.remove("abrir");

    // Em vez de limpar tudo, só oculta a div
    let content = infoDiv.querySelector(".arma_escolhida");
    if (content) {
        content.innerHTML = "";
    }
  }

  function escolherArma(btn, arma){
    let armaDiv = btn.closest(".arma");
    let armaEscolhidaElem = armaDiv.querySelector("div[id^='arma_escolhida']");
    armaEscolhidaElem.style.display = "block";
  
    let mensagem = "";
    let imagemSrc = "";
  
    if(heroiSelecionado === heroUm && arma === armaDois){
      mensagem = "Parabéns aventureiro!... Seu herói está completo!... Guerreiro Intergalático!";
      imagemSrc = "Imagem/guerreiro-completo.png";
    } else if(heroiSelecionado === heroDois && arma === armaQuatro){
      mensagem = "Parabéns aventureiro!... Seu herói está completo!... Mago Intergalático!";
      imagemSrc = "Imagem/mago-completo.png";
    } else if(heroiSelecionado === heroTres && arma === armaUm){
      mensagem = "Parabéns aventureiro!... Seu herói está completo!... Monge Intergalático!";
      imagemSrc = "Imagem/monge-completo.png";
    } else if(heroiSelecionado === heroQuatro && arma === armaTres){
      mensagem = "Parabéns aventureiro!... Seu herói está completo!... Ninja Intergalático!";
      imagemSrc = "Imagem/ninja-completo.png";
    } else {
      mensagem = "OPS!... Não foi dessa vez, seu guerreiro não sabe usar esta arma...";
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
    window.abrirModal = abrirModal;
    window.fecharModal = fecharModal;
    window.mostrarInfo = mostrarInfo;
    window.fecharInfo = fecharInfo;
    window.fecharEscolha = fecharEscolha;
    window.escolherArma = escolherArma;
