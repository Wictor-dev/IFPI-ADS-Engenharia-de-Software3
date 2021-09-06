class Funcionario {
    constructor (
        private _nome:string,
        private _salario:number,
        private _telefone:string
    ){}

    get salario():number{
        return this._salario;
    }

    aumentarSalario(salario:number): number{
        return this._salario += salario
    }

}

export {Funcionario}