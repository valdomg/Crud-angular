import { Component } from '@angular/core';
import { NgFor, NgForOf } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-listar-cliente',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css'
})
export class ListarClienteComponent {

}
