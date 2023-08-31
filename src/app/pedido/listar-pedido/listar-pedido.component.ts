import { Component } from '@angular/core';
import { Cliente, Pedido } from 'src/app/shared';
import { PedidoService } from '../services';
import { ProdutoService } from 'src/app/produto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent {
  public pedidos: Pedido[] = [];
  public cpfCliente: string = '';

  constructor(
    private pedidoService: PedidoService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  
  ngOnInit(): void {
    //let id = +this.route.snapshot.params['id'];
    this.pedidos = this.listarTodos();
  }

  listarTodos(): Pedido[] {
    return this.pedidoService.listarTodos();
  }

  listarPorCpf(): void {
    let cpfSemMascara = this.cpfCliente.replace(/[^\w\s]/gi, '');
    if (cpfSemMascara)
      this.pedidos = this.pedidoService.listarPorCpf(cpfSemMascara);
    else
      this.pedidos =  this.pedidoService.listarTodos();
  }


}
