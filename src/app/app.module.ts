import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared';
import { NgSelectModule } from '@ng-select/ng-select';

import { ClienteModule } from './cliente';
import { PedidoModule } from './pedido';
import { ProdutoModule } from './produto';
import { HomeModule } from './home';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ClienteModule,
    ProdutoModule,
    SharedModule,
    NgSelectModule,
    PedidoModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
