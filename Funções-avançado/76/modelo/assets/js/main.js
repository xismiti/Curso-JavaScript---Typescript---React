function criaCalculadora(){
    return{

        display:document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),


        inicia(){
            this.cliqueBotoes();
        },

        clearDisplay(){
           this.display.value = ''; 
        },
        
        apagaUm(){
            this.display.value = this.display.value.slice(0, -1); //vai pegar o valor da string no display e vai retirar um caracter dela
        },

        realizaConta(){

            let conta = this.display.value;
            try{
                conta = eval(conta);    

                if(!conta){
                    alert('conta invalida')
                    return;
                }
                this.display.value =String(conta);
            } catch(e){
                alert('Conta invalida')

            }

        },

        cliqueBotoes(){

            document.addEventListener('click', function(e){
                const el = e.target;

                if (el.classList.contains('btn-num')){

                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')){

                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')){

                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')){

                    this.realizaConta();
                }



                
            }.bind(this));

        },

        btnParaDisplay(valor){
            this.display.value += valor;

        },



    };
}


const calculadora = criaCalculadora();

calculadora.inicia();