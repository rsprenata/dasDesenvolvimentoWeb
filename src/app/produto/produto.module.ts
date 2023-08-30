import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirEditarProdutoComponent } from './inserir-editar-produto/inserir-editar-produto.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { ProdutoService } from './services';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [
    InserirEditarProdutoComponent,
    ListarProdutoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  providers:[
    ProdutoService
  ]
})
export class ProdutoModule { }
