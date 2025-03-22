    /* Estilizando o AUDIO OU TRILHA da página */
        document.addEventListener("DOMContentLoaded", function() {
            let audio = document.getElementById("backgroundMusic");
            let button = document.getElementById("toggleButton");

            // Tentar iniciar a música automaticamente
            audio.play().catch(error => {
                console.log("Autoplay bloqueado, usuário precisa interagir primeiro.");
            });

            button.addEventListener("click", function() {
                if (audio.paused) {
                    audio.play();
                    button.textContent = "Pausar Trilha";
                } else {
                    audio.pause();
                    button.textContent = "Tocar Trilha";
                }
            });
        });   
    
    /* Sorteio dos números de moedas */    

        let numeroSorteado = 0; // Variável global

        function sortearNumero(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }

        function realizarSorteio() {
            numeroSorteado = sortearNumero(1000, 10100)
            document.getElementById("resultado").innerText = numeroSorteado + " Moedas... Agora escolha o seu herói!... ";
        } 
        
        function calcular(){
            let nivel01 = 1000;
            let nivel02 = 2000;
            if( numeroSorteado < nivel01){
                document.getElementById("ponto").innerText = "OPS! Não foi dessa vez!... Você possui apenas " + numeroSorteado +" moedas"
                document.getElementById("mensagem").innerText = "Busque mais recompensas na pedra do poder!..."
            }else if( numeroSorteado >= nivel01 && numeroSorteado < nivel02){
                document.getElementById("ponto").innerText = "FERRO!... Você possui " + numeroSorteado +" Moedas"
                document.getElementById("mensagem").innerText = "Busque mais recompensas na pedra do poder, e suba de nivel!..."
            }else{
                document.getElementById("ponto").innerText = "FERRO!... Mas você possui " + numeroSorteado +" Moedas..."
                document.getElementById("mensagem").innerText = "QUE TAL SUBIR DE NIVEL.. O bronze é o ideal para o seu XP!..."
            }
        }
        
        function calcular2(){
            let nivel02 = 2000;
            let nivel03 = 5000;
            if( numeroSorteado < nivel02){
                document.getElementById("ponto2").innerText = "OPS! Não foi dessa vez!... Você possui apenas " + numeroSorteado +" moedas"
                document.getElementById("mensagem2").innerText = "Busque mais recompensas na pedra do poder!..."
            }else if( numeroSorteado >= nivel02 && numeroSorteado < nivel03){
                document.getElementById("ponto2").innerText = "BRONZE!... Você possui " + numeroSorteado +" moedas"
                document.getElementById("mensagem2").innerText = "Busque mais recompensas na pedra do poder, e suba de nivel!..."
            }else{
                document.getElementById("ponto2").innerText = "BRONZE!... Mas você possui " + numeroSorteado +" moedas..."
                document.getElementById("mensagem2").innerText = "QUE TAL SUBIR DE NIVEL.. O PRATA é o ideal para o seu XP!..."
            }
        }

        function calcular3(){
            let nivel03 = 5000;
            let nivel04 = 7000;
            if( numeroSorteado < nivel03){
                document.getElementById("ponto3").innerText = "OPS! Não foi dessa vez!... Você possui apenas " + numeroSorteado +" moedas"
                document.getElementById("mensagem3").innerText = "Busque mais recompensas na pedra do poder!..."
            }else if( numeroSorteado >= nivel03 && numeroSorteado < nivel04){
                document.getElementById("ponto3").innerText = "PRATA!... Você possui " + numeroSorteado +" moedas"
                document.getElementById("mensagem3").innerText = "Busque mais recompensas na pedra do poder, e suba de nivel!..."
            }else{
                document.getElementById("ponto3").innerText = "PRATA!... Mas você possui " + numeroSorteado +" moedas..."
                document.getElementById("mensagem3").innerText = "QUE TAL SUBIR DE NIVEL.. O OURO é o ideal para o seu XP!..."
            }
        }

        function calcular4(){
            let nivel04 = 7000;
            let nivel05 = 8000;
            if( numeroSorteado < nivel04){
                document.getElementById("ponto4").innerText = "OPS! Não foi dessa vez!... Você possui apenas " + numeroSorteado +" moedas"
                document.getElementById("mensagem4").innerText = "Busque mais recompensas na pedra do poder!..."
            }else if( numeroSorteado >= nivel04 && numeroSorteado < nivel05){
                document.getElementById("ponto4").innerText = "OURO!... Você possui " + numeroSorteado +" moedas"
                document.getElementById("mensagem4").innerText = "Busque mais recompensas na pedra do poder, e suba de nivel!..."
            }else{
                document.getElementById("ponto4").innerText = "OURO!... Mas você possui " + numeroSorteado +" moedas..."
                document.getElementById("mensagem4").innerText = "QUE TAL SUBIR DE NIVEL.. O PLATINA é o ideal para o seu XP!..."
            }
        }

        function calcular5(){
            let nivel05 = 8000;
            let nivel06 = 9000;
            if( numeroSorteado < nivel05){
                document.getElementById("ponto5").innerText = "OPS! Não foi dessa vez!... Você possui apenas " + numeroSorteado +" moedas"
                document.getElementById("mensagem5").innerText = "Busque mais recompensas na pedra do poder!..."
            }else if( numeroSorteado >= nivel05 && numeroSorteado < nivel06){
                document.getElementById("ponto5").innerText = "PLATINA!... Você possui " + numeroSorteado +" moedas"
                document.getElementById("mensagem5").innerText = "Busque mais recompensas na pedra do poder, e suba de nivel!..."
            }else{
                document.getElementById("ponto5").innerText = "PLATINA!... Mas você possui " + numeroSorteado +" moedas..."
                document.getElementById("mensagem5").innerText = "QUE TAL SUBIR DE NIVEL.. O ASCENDENTE é o ideal para o seu XP!..."
            }
        }

        function calcular6(){
            let nivel06 = 9000;
            let nivel07 = 10000;
            if( numeroSorteado < nivel06){
                document.getElementById("ponto6").innerText = "OPS! Não foi dessa vez!... Você possui apenas " + numeroSorteado +" moedas"
                document.getElementById("mensagem6").innerText = "Busque mais recompensas na pedra do poder!..."
            }else if( numeroSorteado >= nivel06 && numeroSorteado < nivel07){
                document.getElementById("ponto6").innerText = "ASCENDENTE!... Você possui " + numeroSorteado +" moedas"
                document.getElementById("mensagem6").innerText = "Busque mais recompensas na pedra do poder, e suba de nivel!..."
            }else{
                document.getElementById("ponto6").innerText = "ASCENDENTE!... Mas você possui " + numeroSorteado +" moedas..."
                document.getElementById("mensagem6").innerText = "QUE TAL SUBIR DE NIVEL.. O IMORTAL é o ideal para o seu XP!..."
            }
        }

        function calcular7(){
            let nivel07 = 10000;
            let nivel08 = 10100;
            if( numeroSorteado < nivel07){
                document.getElementById("ponto7").innerText = "OPS! Não foi dessa vez!... Você possui apenas " + numeroSorteado +" moedas"
                document.getElementById("mensagem7").innerText = "Busque mais recompensas na pedra do poder!..."
            }else if( numeroSorteado >= nivel07 && numeroSorteado < nivel08){
                document.getElementById("ponto7").innerText = "IMORTAL!... Você possui " + numeroSorteado +" moedas"
                document.getElementById("mensagem7").innerText = "Busque mais recompensas na pedra do poder, e suba de nivel!..."
            }else{
                document.getElementById("ponto7").innerText = "IMORTAL!... Mas você possui " + numeroSorteado +" moedas..."
                document.getElementById("mensagem7").innerText = "QUE TAL SUBIR DE NIVEL.. O RADIANTE é o ideal para o seu XP!..."
            }
        }

        function calcular8(){
            let nivel08 = 10100;
            if( numeroSorteado < nivel08){
                document.getElementById("ponto8").innerText = "OPS! Não foi dessa vez!... Você possui apenas " + numeroSorteado +" moedas"
                document.getElementById("mensagem8").innerText = "Busque mais recompensas na pedra do poder!..."
            }else if( numeroSorteado >= nivel08 ){
                document.getElementById("ponto8").innerText = "RADIANTE!... Você possui " + numeroSorteado +" moedas"
                document.getElementById("mensagem8").innerText = "OPS! Estamos no ultimo nível... Agora você é IMORTAL!..."
            }
        }
           

    /*********************************************************************************************** */
    /**** Trabalhando os modais  */
      
    function abrirModal(){
        var modal = document.getElementById('janela-modal');
        modal.classList.add('abrir')

        modal.addEventListener('click', (e) => {
            if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
                modal.classList.remove('abrir')
            }
        })             
        
    }

    function abrirModal2(){
        var modal = document.getElementById('janela-modal2');
        modal.classList.add('abrir2')

        modal.addEventListener('click', (e) => {
            if(e.target.id == 'fechar2' || e.target.id == 'janela-modal2'){
                modal.classList.remove('abrir2')
            }
        })
    }
    function abrirModal3(){
        var modal = document.getElementById('janela-modal3');
        modal.classList.add('abrir3')

        modal.addEventListener('click', (e) => {
            if(e.target.id == 'fechar3' || e.target.id == 'janela-modal3'){
                modal.classList.remove('abrir3')
            }
        })
    }
    function abrirModal4(){
        var modal = document.getElementById('janela-modal4');
        modal.classList.add('abrir4')

        modal.addEventListener('click', (e) => {
            if(e.target.id == 'fechar4' || e.target.id == 'janela-modal4'){
                modal.classList.remove('abrir4')
            }
        })
    }
    function abrirModal5(){
        var modal = document.getElementById('janela-modal5');
        modal.classList.add('abrir5')

        modal.addEventListener('click', (e) => {
            if(e.target.id == 'fechar5' || e.target.id == 'janela-modal5'){
                modal.classList.remove('abrir5')
            }
        })
    }
    function abrirModal6(){
        var modal = document.getElementById('janela-modal6');
        modal.classList.add('abrir6')

        modal.addEventListener('click', (e) => {
            if(e.target.id == 'fechar6' || e.target.id == 'janela-modal6'){
                modal.classList.remove('abrir6')
            }
        })
    }
    function abrirModal7(){
        var modal = document.getElementById('janela-modal7');
        modal.classList.add('abrir7')

        modal.addEventListener('click', (e) => {
            if(e.target.id == 'fechar7' || e.target.id == 'janela-modal7'){
                modal.classList.remove('abrir7')
            }
        })
    }
    function abrirModal8(){
        var modal = document.getElementById('janela-modal8');
        modal.classList.add('abrir8')

        modal.addEventListener('click', (e) => {
            if(e.target.id == 'fechar8' || e.target.id == 'janela-modal8'){
                modal.classList.remove('abrir8')
            }
        })
    }


    /*********************************************************************************************** */
    /**** Trabalhando os NIVEIS DE PONTOS DOS HERÓIS...  */
    