import { Component } from '@angular/core';
import { Pedido, Produto } from 'src/app/shared';
import { ProdutoService } from '../services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent {
  public produtos: Produto[] = [];

  constructor( private produtoService: ProdutoService,
              private modalService: NgbModal)
  {}

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(): Produto[]{

    let produtos: Produto[] = [];

    this.produtoService.listarTodos().subscribe({
        next: (data: Produto[]) =>{
          this.produtos = data;
        },
        error: (err) => {
            console.log(err)
        }
      }
    )
    return produtos;
  }


  remover($event: any, produto: Produto): void {
    $event.preventDefault();

    if(confirm(`Deseja realmente remover o produto ${produto.descricao}?`)) {
      this.produtoService.remover(produto);

      this.produtos = this.listarTodos();
    }
  }
}
