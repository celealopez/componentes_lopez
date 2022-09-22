import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './desafio1/navbar/navbar.component';
import { ToolbarComponent } from './desafio1/toolbar/toolbar.component';
import { StudentComponent } from './desafio1/student/student.component';


@NgModule({
  declarations: [
    AppComponent,
 
    NavbarComponent,
    ToolbarComponent,
    StudentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
