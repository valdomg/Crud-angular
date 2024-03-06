import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-atualizar-cliente',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './atualizar-cliente.component.html',
  styleUrl: './atualizar-cliente.component.css'
})
export class AtualizarClienteComponent {

}
