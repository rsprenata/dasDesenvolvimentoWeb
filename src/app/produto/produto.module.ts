import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirEditarProdutoComponent } from './inserir-editar-produto/inserir-editar-produto.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { ProdutoService } from './services';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InserirEditarProdutoComponent,
    ListarProdutoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers:[
    ProdutoService
  ]
})
export class ProdutoModule { }
