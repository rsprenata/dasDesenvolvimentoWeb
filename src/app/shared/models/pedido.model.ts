import { publishFacade } from "@angular/compiler";
import { Cliente } from "./cliente.model";

export class Pedido {
    constructor(
        public id?: number,
        public data?: Date,
        public cliente?: Cliente,
        public produtos?: Produto[]
    ) {}
}
