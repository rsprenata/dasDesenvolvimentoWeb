import { Injectable } from '@angular/core';
import { Pedido } from '../../shared/models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor() { }

  inserir(pedido: Pedido): void {
    pedido.id = new Date().getTime();
    //TODO inserir pedido

  }

}
