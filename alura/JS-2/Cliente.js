export class Cliente { //utilizado para fazer um 'molde' dos dados que serão utilizados
    nome;
    _cpf;

    get cpf() {
        return this._cpf
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf
    }
}