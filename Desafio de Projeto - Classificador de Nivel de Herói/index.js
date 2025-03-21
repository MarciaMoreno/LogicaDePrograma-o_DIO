/************************************************************************************************ */
    /* Sorteio dos números de moedas */
        function sortearNumero(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function realizarSorteio() {
            const numeroSorteado = sortearNumero(1000, 10000);
            document.getElementById("resultado").innerText = numeroSorteado + " Moedas... Agora escolha o seu herói!... ";
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