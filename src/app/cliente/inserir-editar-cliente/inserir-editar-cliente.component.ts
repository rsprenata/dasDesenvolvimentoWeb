import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/shared';
import { ClienteService } from '../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inserir-editar-cliente',
  templateUrl: './inserir-editar-cliente.component.html',
  styleUrls: ['./inserir-editar-cliente.component.css']
})
export class InserirEditarClienteComponent implements OnInit {
  @ViewChild('formCliente') formCliente!: NgForm;
  cliente: Cliente = new Cliente();

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];

    if (id) {
      this.clienteService.buscarPorId(id).subscribe({
        next: (data: Cliente)=>{
          this.cliente = data;
        },
        error(err) {
            console.log(err)
        },
      });
    } else {
      this.cliente = new Cliente();
    }
  }

  inserir(): void {
    if (this.formCliente.form.valid) {
      this.clienteService.inserir(this.cliente).subscribe(
        cliente => {
          this.router.navigate(["/cliente"]);
        }
      );
    }
  }

  atualizar(): void {
    if (this.formCliente.form.valid) {
      this.clienteService.atualizar(this.cliente).subscribe(
        cliente => {
          this.router.navigate(['/cliente']);

        }
      );
    }
  }
}
