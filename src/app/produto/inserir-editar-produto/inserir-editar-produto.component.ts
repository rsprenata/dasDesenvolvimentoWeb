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
  produto: Produto = new Produto();

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];

    if (id) {
      this.produtoService.buscarPorId(id).subscribe({
        next: (data: Produto)=>{
          this.produto = data;
        },
        error(err) {
            console.log(err)
        },
      });
    } else {
      this.produto = new Produto();
    }
  }

  inserir(): void {
    if (this.formProduto.form.valid) {
      this.produtoService.inserir(this.produto).subscribe(
        produto => {
          this.router.navigate(["/produto"]);
        }
      );
      
    }
  }

  atualizar(): void {
    if (this.formProduto.form.valid) {      
      this.produtoService.atualizar(this.produto).subscribe({
        next: (res: Produto) => {
          this.produto = res;
          this.router.navigate(["/produto"]);
        },
        error: (error) => {
          throw new Error("Produto não encontrado: id = " + this.produto.id + ", com erro " + error);
        }
      });
      
    }

  }  

  remover(): void {
    if (this.formProduto.form.valid) {
      this.produtoService.atualizar(this.produto).subscribe(
        produto => {
          this.router.navigate(['/produto']);

        }
      );
    }
  }
}
