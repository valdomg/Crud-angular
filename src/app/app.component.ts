//Angular Imports
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Material Imports
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    //Angular Imports
    RouterOutlet,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    //Material Imports
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatToolbarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-angular';
}
