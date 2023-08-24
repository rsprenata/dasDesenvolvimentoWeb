import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { InserirEditarClienteComponent } from './cliente/inserir-editar-cliente/inserir-editar-cliente.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'cliente/listar',
    pathMatch: 'full'
  },
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
