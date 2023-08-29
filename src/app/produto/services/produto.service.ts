import { Injectable } from '@angular/core';

import { Produto } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  listarTodos(): Produto[] {
    const produtos: Produto[]= 
      [
        new Produto( 1 , 'CD Mc Marcinho Só as tops'),
        new Produto( 2 , 'DVD Bruno e Marrone Acustico'),
        new Produto( 3 , 'Liguica do Massacration' )
      ]
    ;

    //return produtos ? JSON.parse(produtos) : [];
    return produtos
  }
}
