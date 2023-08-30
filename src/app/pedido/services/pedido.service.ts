import { Injectable } from '@angular/core';
import { Pedido } from '../../shared/models/pedido.model';
import { PedidoModule } from '../pedido.module';

const LS_CHAVE: string = "pedidos";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor() { }

  listarTodos(): Pedido[] {
    const pedidos = localStorage[LS_CHAVE];

    return pedidos ? JSON.parse(pedidos) : [];
  }

  inserir(pedido: Pedido): void {

    const pedidos = this.listarTodos();

    pedido.id = new Date().getTime();

    pedidos.push(pedido);

    localStorage[LS_CHAVE] = JSON.stringify(pedidos);

  }

}
