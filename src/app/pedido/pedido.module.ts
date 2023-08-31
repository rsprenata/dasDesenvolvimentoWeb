import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { RealizarPedidoComponent } from './realizar-pedido/';
import { ListarPedidoComponent } from './listar-pedido/';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    RealizarPedidoComponent,
    ListarPedidoComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    RouterModule,
    NgxMaskModule.forRoot(),
    SharedModule
  ]
})
export class PedidoModule { }
