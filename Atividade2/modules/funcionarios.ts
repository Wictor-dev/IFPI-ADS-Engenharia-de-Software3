class Funcionario {
    constructor (
        public nome: string, 
        public salario: number, 
        public logradouro: string, 
        public numero:number, 
        public cep:string, 
        public telefone:string){}

    aumentarSalario(salario:number):number{
        return this.salario += salario;
    }

}

export {Funcionario}