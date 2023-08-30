import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealizarPedidoComponent } from './realizar-pedido/realizar-pedido.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [
    RealizarPedidoComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    RouterModule,
    SharedModule
  ]
})
export class PedidoModule { }
