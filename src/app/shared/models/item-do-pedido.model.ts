import { Produto } from "./produto.model";

export class ItemDoPedido {
    constructor(
        public quantidade?: number,
        public produto?: Produto
    ) {}
}
