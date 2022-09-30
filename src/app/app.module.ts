import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './desafio1/navbar/navbar.component';
import { ToolbarComponent } from './desafio1/toolbar/toolbar.component';
import { StudentComponent } from './desafio1/student/student.component';
import { DirectivasComponent } from './directivas-prueba-clase/directivas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulariosReactivosComponent } from './directivas-prueba-clase/formularios-reactivos/formularios-reactivos.component';


@NgModule({
  declarations: [
    AppComponent,
 
    NavbarComponent,
    ToolbarComponent,
    StudentComponent,
    DirectivasComponent,
    FormulariosReactivosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
