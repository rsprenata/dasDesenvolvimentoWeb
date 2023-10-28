import { Component } from '@angular/core';
import { Pedido, Produto } from 'src/app/shared';
import { ProdutoService } from '../services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PedidoService } from 'src/app/pedido/services';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent {
  public produtos: Produto[] = [];

  constructor( private produtoService: ProdutoService,
                private pedidoService: PedidoService,
              private modalService: NgbModal)
  {}

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(): Produto[]{

    this.produtoService.listarTodos().subscribe({
        next: (data: Produto[]) =>{
          this.produtos = data;
        },
        error: (err) => {
            console.log(err)
        }
      }
    )
    return this.produtos;
  }


  remover($event: any, produto: Produto): void {
    $event.preventDefault();

    if(confirm(`Deseja realmente remover o produto ${produto.descricao}?`)) {
      this.pedidoService.listarPorIdProduto(produto.id!).subscribe(
        pedidos => {
          if (!pedidos || pedidos.length <= 0) {
            this.produtoService.remover(produto).subscribe(
              produto => {
                this.produtos = this.listarTodos();
              }
            );
          } else {
            alert('Não é possível excluir pois esse produto esta vinculado a pedidos.')
          }
        }
      );
    }
  }
}
