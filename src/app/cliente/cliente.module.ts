import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { SharedModule } from '../shared';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

import { ModalClienteComponent } from './modal-cliente';
import { ClienteService } from './services';
import { ListarClienteComponent } from './listar-cliente';
import { InserirEditarClienteComponent } from './inserir-editar-cliente';

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
