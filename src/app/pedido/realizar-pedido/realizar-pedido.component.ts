import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente, Pedido, Produto } from 'src/app/shared';
import { PedidoService } from '../services/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/produto';
import { ItemDoPedido } from 'src/app/shared/models/item-do-pedido.model';
import { ClienteService } from 'src/app/cliente';

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
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    
    this.produtoService.listarTodos().subscribe({
      next: (data: Produto[]) => {
        this.produtos = data;
      },
      error(err) {
          console.log(err);
      },
      complete: () => {

      }
    });
  }

  insereProduto() {
    let novoItem: ItemDoPedido = new ItemDoPedido(0, this.produtoSelecionado)
    this.produtosCarrinho.push(novoItem)
  }

  salvarPedido(): void {
    if (this.formPedido.form.valid) {
      let cliente: Cliente = new Cliente(); 
      this.clienteService.buscarPorCpf(this.cpfCliente.replace(/[^\w\s]/gi, '')).
        subscribe({
          next: (data: Cliente) => {
            cliente = data
          },
          error: error => console.log(error),
          complete() {
              
          },
        }
        );
      
      
      if (cliente) {
        this.pedido.cliente = cliente;
        this.pedido.items = this.produtosCarrinho
        this.pedidoService.inserir(this.pedido);
        
        this.pedido = new Pedido();
        this.produtosCarrinho = [];
        this.cpfCliente = ""
        alert("Pedido realizado com sucesso")
        this.router.navigate(["/pedido"]);
      } else {
        alert("Cliente não encontrado")
      }
    }
  }

}
