export class Produto {
    constructor(
        public id?: number,
        public descricao?: string
    ){}
   
    get getId() {
        return this.id;
    }

    private set setId( id:number){
        this.id = id;
    }

    get getDescricao(){
        return this.descricao;
    }
     
    private set setDescricao(descricao: string){
        this.descricao = descricao;
    }
}
