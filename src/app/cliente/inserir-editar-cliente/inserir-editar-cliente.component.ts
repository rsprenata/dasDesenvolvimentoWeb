import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { ClienteService } from '../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inserir-editar-cliente',
  templateUrl: './inserir-editar-cliente.component.html',
  styleUrls: ['./inserir-editar-cliente.component.css']
})
export class InserirEditarClienteComponent implements OnInit {
  @ViewChild('formCliente') formCliente!: NgForm;
  cliente!: Cliente;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];

    if (id) {
      const res = this.clienteService.buscarPorId(id);

      if (res !== undefined) {
        this.cliente = res;
      } else {
        throw new Error ("Cliente não encontrado: id = " + id);
      }
    } else {
      this.cliente = new Cliente();
    }
  }

  inserir(): void {
    if (this.formCliente.form.valid) {
      this.clienteService.inserir(this.cliente);
      
      this.router.navigate(["/cliente"]);
    }
  }

  atualizar(): void {
    if (this.formCliente.form.valid) {
      this.clienteService.atualizar(this.cliente);

      this.router.navigate(['/cliente']);
    }
  }
}
