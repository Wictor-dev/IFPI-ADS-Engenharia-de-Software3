import {Funcionario} from './modules/funcionarios'

let f1:Funcionario = new Funcionario('Wictor', 2000, 'Rua Cloves', 123, '6400000', '98882321');

f1.aumentarSalario(100);

console.log(f1.salario)