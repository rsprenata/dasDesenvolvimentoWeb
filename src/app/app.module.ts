import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClienteModule } from './cliente/cliente.module';
import { SharedModule } from './shared';
import { ProdutoModule } from './produto';
import { NgSelectModule } from '@ng-select/ng-select';
import { PedidoModule } from './pedido/pedido.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ClienteModule,
    ProdutoModule,
    SharedModule,
    NgSelectModule,
    PedidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
