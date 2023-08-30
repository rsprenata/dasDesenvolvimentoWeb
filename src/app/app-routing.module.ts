import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { InserirEditarClienteComponent } from './cliente/inserir-editar-cliente/inserir-editar-cliente.component';
import { InserirEditarProdutoComponent, ListarProdutoComponent } from './produto';
import { RealizarPedidoComponent } from './pedido/realizar-pedido/realizar-pedido.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'cliente/listar',
    pathMatch: 'full'
  },
/******************************/
  { 
    path: 'cliente',
    redirectTo: 'cliente/listar'
  },
  { 
    path: 'cliente/listar',
    component: ListarClienteComponent 
  },
  { 
    path: 'cliente/inserir',
    component: InserirEditarClienteComponent
  },
  { 
    path: 'cliente/editar/:id',
    component: InserirEditarClienteComponent
  },
/******************************/
  { 
    path: 'produto',
    redirectTo: 'produto/listar'
  },
  { 
    path: 'produto/listar',
    component: ListarProdutoComponent 
  },
  { 
    path: 'produto/inserir',
    component: InserirEditarProdutoComponent
  },
  { 
    path: 'produto/editar/:id',
    component: InserirEditarProdutoComponent
  },
  { 
    path: 'pedido',
    component: RealizarPedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
