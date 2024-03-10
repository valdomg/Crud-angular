export class Cliente{ //CLASS IN TYPESCRIPT

    //attributes
    id: string;
    nome:string; 
    endereco: string;

    //constructor initialize object with values
    constructor(id:string, nome:string, endereco:string){
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
    }
}
