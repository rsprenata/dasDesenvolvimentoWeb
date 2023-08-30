import { publishFacade } from "@angular/compiler";
import { Cliente } from "./cliente.model";
import { Produto } from "./produto.model";
import { ItemDoPedido } from "./item-do-pedido.model";

export class Pedido {
    constructor(
        public id?: number,
        public data?: Date,
        public cliente?: Cliente,
        public items?: ItemDoPedido[]
    ) {}
}
