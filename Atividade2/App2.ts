import {Funcionario} from './modules/funcionario2';

let f2: Funcionario = new Funcionario('Wictor', 300, '98888888');

console.log(f2.salario)
f2.aumentarSalario(100)
console.log(f2.salario)