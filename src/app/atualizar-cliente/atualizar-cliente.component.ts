import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


import { ClienteService } from '../cliente.service';
import { Cliente } from '../models/Cliente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-cliente',
  standalone: true,
  imports: [
    
    NgIf,
    NgFor,
    CommonModule,
    RouterLink,
    
  ],
  templateUrl: './atualizar-cliente.component.html',
  styleUrl: './atualizar-cliente.component.css'
})
export class AtualizarClienteComponent {
  

}
