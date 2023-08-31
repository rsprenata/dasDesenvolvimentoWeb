import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente, Pedido, Produto } from 'src/app/shared';
import { PedidoService } from '../services/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/produto';
import { ItemDoPedido } from 'src/app/shared/models/item-do-pedido.model';

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
  cpfCliente!: string;
  produtosCarrinho: ItemDoPedido[] = [];
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

  insereProduto() {
    let novoItem: ItemDoPedido = new ItemDoPedido(0, this.produtoSelecionado)
    this.produtosCarrinho.push(novoItem)
    console.log("entrou no selecionaProduto")
  }

  salvarPedido(): void {
    if (this.formPedido.form.valid) {
      this.pedido.cliente = new Cliente();
      this.pedido.cliente.cpf = this.cpfCliente
      this.pedido.items = this.produtosCarrinho
      this.pedidoService.inserir(this.pedido);
      
      this.pedido = new Pedido();
      this.produtosCarrinho = [];
      this.cpfCliente = ""
      alert("Pedido realizado com sucesso")
      this.router.navigate(["/pedido"]);
    }
  }

}
