import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './desafio1/navbar/navbar.component';
import { ToolbarComponent } from './desafio1/toolbar/toolbar.component';
import { StudentComponent } from './desafio1/student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './desafio1/botones-ingresar-registrar/login/login.component';
import { CursosProgComponent } from './desafio1/cursos/cursos-prog/cursos-prog.component';
import { IngresarComponent } from './desafio1/botones-ingresar-registrar/ingresar/ingresar.component';
import { BooleanSiNoPipe } from './pipes/boolean-si-no.pipe';
import { H1FontDirective } from './directivas/h1-font.directive';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NuevoCursoComponent } from './desafio1/cursos/nuevo-curso/nuevo-curso.component';
import { EditarCursoComponent } from './desafio1/cursos/editar-curso/editar-curso.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
   
    NavbarComponent,
    ToolbarComponent,
    StudentComponent,
  
    LoginComponent,
    CursosProgComponent,
    IngresarComponent,
    BooleanSiNoPipe,
    H1FontDirective,
    NuevoCursoComponent,
    EditarCursoComponent,
   
    
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
    MatPaginatorModule,
    HttpClientModule,
   
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
