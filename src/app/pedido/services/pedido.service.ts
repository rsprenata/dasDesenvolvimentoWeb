import { Injectable } from '@angular/core';
import { Pedido } from '../../shared/models/pedido.model';
import { PedidoModule } from '../pedido.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const LS_CHAVE: string = "pedidos";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private httpClient: HttpClient) { }

  BASE_URL = "http://localhost:8080/pedidos/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  listarTodos(): Observable<Pedido[]> {
    return this.httpClient.get<Pedido[]>(this.BASE_URL, this.httpOptions);
  }

  listarPorCpf(cpf: string): Observable<Pedido[]> {
    return this.httpClient.get<Pedido[]>(this.BASE_URL + cpf, this.httpOptions);
  }

  listarPorIdProduto(id: number): Observable<Pedido[]> {
    return this.httpClient.get<Pedido[]>(this.BASE_URL + 'produto/' + id, this.httpOptions);
  }

  inserir(pedido: Pedido): Observable<Pedido> {
    return this.httpClient.post<Pedido>(this.BASE_URL, JSON.stringify(pedido), this.httpOptions);
  }

}
