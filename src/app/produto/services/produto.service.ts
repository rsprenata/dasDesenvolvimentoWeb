import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Produto } from 'src/app/shared';

const LS_CHAVE: string = "produtos";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) { }

  BASE_URL = "http://localhost:8080/usuarios/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  listarTodos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.BASE_URL, this.httpOptions);
  }

  inserir(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.BASE_URL, JSON.stringify(produto), this.httpOptions);
  }

  buscarPorId(id: number): Observable<Produto> {
    return this.httpClient.get<Produto>(this.BASE_URL + id, this.httpOptions);
  }

  atualizar(produto: Produto): Observable<Produto> {
    return this.httpClient.put<Produto>(this.BASE_URL + produto.id, JSON.stringify(produto), this.httpOptions);
  }

  remover(id: number): Observable<Produto> {
    return this.httpClient.delete<Produto>(this.BASE_URL + id, this.httpOptions);
  }
}
