"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var funcionarios_1 = require("./modules/funcionarios");
var f1 = new funcionarios_1.Funcionario('Wictor', 2000, 'Rua Cloves', 123, '6400000', '98882321');
f1.aumentarSalario(100);
console.log(f1.salario);
