import { Injectable } from '@angular/core';

import { Cliente } from '../../shared/models/cliente.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const LS_CHAVE: string = "clientes";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  BASE_URL = "http://localhost:8080/clientes/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  listarTodos(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.BASE_URL, this.httpOptions);
  }

  inserir(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.BASE_URL, JSON.stringify(cliente), this.httpOptions);
  }

  buscarPorId(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.BASE_URL + id, this.httpOptions);
  }

  buscarPorCpf(cpf: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.BASE_URL + 'cpf/' + cpf, this.httpOptions);
  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(this.BASE_URL + cliente.id, JSON.stringify(cliente), this.httpOptions);
  }

  remover(id: number): Observable<Cliente> {
    return this.httpClient.delete<Cliente>(this.BASE_URL + id, this.httpOptions);
  }
}
