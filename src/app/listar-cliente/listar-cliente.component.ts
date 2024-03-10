import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../models/Cliente.model';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-listar-cliente',
  standalone: true,
  imports: [

    NgFor,

  ],
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css'
})
export class ListarClienteComponent {

  public clientes: Cliente[] = []; //Atributo para receber todos os valores da API cliente

  //Injeção de dependência, para redirecionamento de páginas
  constructor(private _clienteService:ClienteService, private _router:Router){

  }

  //NgOnInit ŕa carregar tudo que estiver dentro dele quando o componente for carregado
  ngOnInit(): void {
    //Execução dele
    this.listarClientes();
  }

  //Método para utilização e recebimento de valores do Cliente(ClienteService)
  listarClientes(): void {
    this._clienteService.getClientes().subscribe(
      retornaCliente => {
        this.clientes = retornaCliente.map(
          item => {
            return new Cliente (
              item.id,
              item.nome,
              item.endereco
            );
          }
        )
      }
    )
  }

}
