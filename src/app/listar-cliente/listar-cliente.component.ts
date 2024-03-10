import { Component } from '@angular/core';
import { NgFor} from '@angular/common';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../models/Cliente.model';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-listar-cliente',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    CommonModule,
    RouterLink
    
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
  listarClientes():void{
    //Variável do Constructor
    this._clienteService.getClientes().subscribe( //Subscribe()-> necessário para receber as notificações do Observable
      retornaCliente => { //Função anônima, recebe a lista de valores da API
        this.clientes = retornaCliente.map(item =>{ //.map mapeia todos os itens existentes de um vetor, array, matriz
          return new Cliente (
            item.id, //item tem a função de criar objetos do tipo Cliente
            item.nome,
            item.endereco
          );
        })
      }
    )
  }

}
