import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;
    _saldo = 0; //# significa um atributo privado e que só pode ser vizualizado ou alterado dentro da classe, como #saldo, em TS é diferente

    set cliente(novoCliente) {
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente
        }
    }

    get cliente(){
        return this._cliente
    }


    get saldo(){
        return this._saldo
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente
    }

    sacar(valor){  //o parametro passado 'valor' recebe realmente seu valor quando invocamos o metodo e passamos ele dentro do parenteses sacar(100)
        if(this._saldo >= valor) { //o código entende que o valor será de 100 e sera atribuido em 'valor'
            this._saldo -= valor;
            return valor;
        } else {
            console.log('nao pode sacar');
        }
    }

    depositar(valor) {
        if(valor > 0){
            this._saldo += valor;
        } else {
            console.log('valor negativo');
        }
    }

    transferir(valor, conta){   //metodo transfere o valor informado para a conta informada
        const valorSacado = this.sacar(valor) 
        conta.depositar(valorSacado) 
    }
}
