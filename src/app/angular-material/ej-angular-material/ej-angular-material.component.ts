import { Component, OnInit } from '@angular/core';
import { Cursos } from '../../models/cursos';

@Component({
  selector: 'app-ej-angular-material',
  templateUrl: './ej-angular-material.component.html',
  styleUrls: ['./ej-angular-material.component.css']
})
export class EjAngularMaterialComponent implements OnInit {
  listaLinks:Array<Cursos>;
  variable:number;
   constructor() {
     this.variable=0;
     this.listaLinks = [
    {tipo:'programación',nivel:'básico',link:'https://www.udemy.com/course/logica-programacion-aprende-programar-en-cualquier-lenguaje/'},
    {tipo:'programación',nivel:'básico',link:'https://www.udemy.com/course/fundamentos-de-programacion-web-para-principiantes/'},
    {tipo:'programación',nivel:'básico',link:'https://www.udemy.com/course/aprende-logica-de-programacion/'},
    {tipo:'programación',nivel:'básico',link:'https://www.udemy.com/course/programacion-todosloslenguajes/'},
    {tipo:'programación',nivel:'básico',link:'https://www.udemy.com/course/algoritmos-estructuras-de-datos/'}
       
     ];
    }
  ngOnInit(): void {
  }

  manejarEvento(){
    alert("hice click")
  }

}
