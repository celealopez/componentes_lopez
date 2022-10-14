import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './desafio1/navbar/navbar.component';
import { ToolbarComponent } from './desafio1/toolbar/toolbar.component';
import { StudentComponent } from './desafio1/student/student.component';
import { DirectivasComponent } from 'src/app/angular-material/directivas-prueba-clase/directivas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulariosReactivosComponent } from 'src/app/angular-material/formularios-reactivos/formularios-reactivos.component';
import { FormulariosTemplateComponent } from 'src/app/angular-material/formularios-template/formularios-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EjAngularMaterialComponent } from './angular-material/ej-angular-material/ej-angular-material.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DemoTablaComponent } from './angular-material/demo-tabla/demo-tabla.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './desafio1/botones-ingresar-registrar/login/login.component';
import { CursosProgComponent } from './desafio1/cursos/cursos-prog/cursos-prog.component';
import { IngresarComponent } from './desafio1/botones-ingresar-registrar/ingresar/ingresar.component';
import { BooleanSiNoPipe } from './pipes/boolean-si-no.pipe';
import { H1FontDirective } from './directivas/h1-font.directive';


@NgModule({
  declarations: [
    AppComponent,
 
    NavbarComponent,
    ToolbarComponent,
    StudentComponent,
    DirectivasComponent,
    FormulariosReactivosComponent,
    FormulariosTemplateComponent,
    EjAngularMaterialComponent,
    DemoTablaComponent,
    LoginComponent,
    CursosProgComponent,
    IngresarComponent,
    BooleanSiNoPipe,
    H1FontDirective,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
