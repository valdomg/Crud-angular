export class Cliente{ //CLASS IN TYPESCRIPT

    //attributes
    id!: number;
    nome!:string; 
    endereco!: string;

    //constructor initialize object with values
    constructor(id:number, nome:string, endereco:string){
        this.id = id;
        this.nome = nome;
        this.endereco = endereco
    }
}
