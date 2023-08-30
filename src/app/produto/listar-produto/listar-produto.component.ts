import { Component } from '@angular/core';
import { Produto } from 'src/app/shared';
import { ProdutoService } from '../services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent {
  public produtos: Produto[] = []

  constructor( private produtoService: ProdutoService,
              private modalService: NgbModal)
  {}

  ngOnInit(): void {
    this.produtos = this.listarTodos();
  }

  listarTodos(): Produto[]{
    return this.produtoService.listarTodos();
  }


  remover($event: any, produto: Produto): void {
    $event.preventDefault();

    if(confirm(`Deseja realmente remover o produto ${produto.descricao}?`)) {
      this.produtoService.remover(produto.id!);

      this.produtos = this.listarTodos();
    }
  }
}
