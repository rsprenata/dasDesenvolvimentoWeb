import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente, Pedido, Produto } from 'src/app/shared';
import { PedidoService } from '../services/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/produto';

@Component({
  selector: 'app-realizar-pedido',
  templateUrl: './realizar-pedido.component.html',
  styleUrls: ['./realizar-pedido.component.css']
})
export class RealizarPedidoComponent implements OnInit {
  @ViewChild('formPedido') formPedido!: NgForm;
  pedido: Pedido = new Pedido();

  produtos: Produto[] = [];
  produtoSelecionado!: Produto;
  cpfCliente!: String;
  produtosCarrinho: Produto[] = [];
  quantidade!: number;

  constructor(
    private pedidoService: PedidoService,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.produtos = this.produtoService.listarTodos();
  }

  inserir(): void {
    if (this.formPedido.form.valid) {
      this.pedidoService.inserir(this.pedido);
      
      this.router.navigate(["/pedido"]);
    }
  }

  insereProduto() {
    console.log("entrou no selecionaProduto")
}

}
