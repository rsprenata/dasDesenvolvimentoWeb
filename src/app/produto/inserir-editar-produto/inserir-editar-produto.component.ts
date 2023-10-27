import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produto } from 'src/app/shared';
import { ProdutoService } from '../services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inserir-editar-produto',
  templateUrl: './inserir-editar-produto.component.html',
  styleUrls: ['./inserir-editar-produto.component.css']
})
export class InserirEditarProdutoComponent implements OnInit {
  @ViewChild('formProduto') formProduto!: NgForm;
  produto!: Produto;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];

    if (id) {
      this.produtoService.buscarPorId(id).subscribe(
        (res : Produto) => {
          this.produto = res
        },
        (error) => {
          throw new Error("Produto não encontrado: id = " + id + error);
        }
      );
    } else {
      this.produto = new Produto();
    }
  }

  inserir(): void {
    if (this.formProduto.form.valid) {
      this.produtoService.inserir(this.produto);
      
      this.router.navigate(["/produto"]);
    }
  }

  atualizar(): void {
    if (this.formProduto.form.valid) {
      this.produtoService.atualizar(this.produto);

      this.router.navigate(['/produto']);
    }
  }
}
