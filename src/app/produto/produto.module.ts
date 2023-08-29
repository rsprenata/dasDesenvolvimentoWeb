import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirEditarProdutoComponent } from './inserir-editar-produto/inserir-editar-produto.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';



@NgModule({
  declarations: [
    InserirEditarProdutoComponent,
    ListarProdutoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProdutoModule { }
