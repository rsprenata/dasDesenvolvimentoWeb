import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../services/cliente.service';
import { Cliente } from 'src/app/shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalClienteComponent } from '../modal-cliente/modal-cliente.component';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
      this.clientes = this.listarTodos();
  }

  listarTodos(): Cliente[] {
    return this.clienteService.listarTodos();
  }

  remover($event: any, cliente: Cliente): void {
    $event.preventDefault();

    if(confirm(`Deseja realmente remover o cliente ${cliente.nome}?`)) {
      this.clienteService.remover(cliente.id!);

      this.clientes = this.listarTodos();
    }
  }

  abrirModalCliente(cliente: Cliente) {
    const modalRef = this.modalService.open(ModalClienteComponent);
    modalRef.componentInstance.cliente = cliente;
  }
}
