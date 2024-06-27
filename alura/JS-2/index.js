import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Pedro", 123123123); //um OBJETO e sua maneira de adicionar dados de acordo com o 'molde' criado
const contaCorrente1 = new ContaCorrente(1001, cliente1);
contaCorrente1.depositar(200)

const cliente2 = new Cliente("Lucas", 3212321321);
const contaCorrente2 = new ContaCorrente(102, cliente2);
contaCorrente2.depositar(500)

console.log(contaCorrente1)