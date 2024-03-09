import { Component } from '@angular/core';
import { NgFor} from '@angular/common';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-cliente',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    CommonModule
  ],
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css'
})
export class ListarClienteComponent {


}
