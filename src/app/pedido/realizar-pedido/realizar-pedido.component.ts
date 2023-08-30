import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pedido } from 'src/app/shared';
import { PedidoService } from '../services/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-realizar-pedido',
  templateUrl: './realizar-pedido.component.html',
  styleUrls: ['./realizar-pedido.component.css']
})
export class RealizarPedidoComponent implements OnInit {
  @ViewChild('formPedido') formPedido!: NgForm;
  pedido!: Pedido;

  constructor(
    private pedidoService: PedidoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];

    
  }

  inserir(): void {
    if (this.formPedido.form.valid) {
      this.pedidoService.inserir(this.pedido);
      
      this.router.navigate(["/pedido"]);
    }
  }

}
