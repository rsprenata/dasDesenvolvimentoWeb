import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from './services/cliente.service';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirEditarClienteComponent } from './inserir-editar-cliente/inserir-editar-cliente.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { SharedModule } from '../shared';
import { ModalClienteComponent } from './modal-cliente/modal-cliente.component';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [
    ListarClienteComponent,
    InserirEditarClienteComponent,
    ModalClienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    SharedModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
