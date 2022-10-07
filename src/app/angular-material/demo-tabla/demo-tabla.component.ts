import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cursos } from '../../models/cursos';


@Component({
  selector: 'app-demo-tabla',
  templateUrl: './demo-tabla.component.html',
  styleUrls: ['./demo-tabla.component.css']
})
export class DemoTablaComponent implements OnInit {
  listaLinks!:Array<Cursos>;
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

    columnas : string[]=['tipo','nivel','link','acciones'];
    datasource: MatTableDataSource<Cursos> = new MatTableDataSource<Cursos>(this.listaLinks)
  ngOnInit(): void {
  }

}
