"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var funcionario2_1 = require("./modules/funcionario2");
var f2 = new funcionario2_1.Funcionario('Wictor', 300, '98888888');
console.log(f2.salario);
f2.aumentarSalario(100);
console.log(f2.salario);
