import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cadastrar-cliente',
  standalone: true,
  imports: [
    RouterLink,
    
    CommonModule
  ],
  templateUrl: './cadastrar-cliente.component.html',
  styleUrl: './cadastrar-cliente.component.css'
})
export class CadastrarClienteComponent {

}
