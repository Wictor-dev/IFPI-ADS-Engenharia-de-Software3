"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(_nome, _salario, _telefone) {
        this._nome = _nome;
        this._salario = _salario;
        this._telefone = _telefone;
    }
    Object.defineProperty(Funcionario.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.aumentarSalario = function (salario) {
        return this._salario += salario;
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
