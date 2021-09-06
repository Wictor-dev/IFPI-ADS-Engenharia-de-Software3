"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario, logradouro, numero, cep, telefone) {
        this.nome = nome;
        this.salario = salario;
        this.logradouro = logradouro;
        this.numero = numero;
        this.cep = cep;
        this.telefone = telefone;
    }
    Funcionario.prototype.aumentarSalario = function (salario) {
        return this.salario += salario;
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
