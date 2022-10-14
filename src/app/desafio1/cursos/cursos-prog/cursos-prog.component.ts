import { Component, OnInit } from '@angular/core';
import { Cursos } from '../../../models/cursos';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-cursos-prog',
  templateUrl: './cursos-prog.component.html',
  styleUrls: ['./cursos-prog.component.css']
})
export class CursosProgComponent implements OnInit {
 
  
 variable:number;

  listaLinks : Cursos[]= [
  {id:1,tipo:'programación',activo:true,nivel:'básico',link:'https://www.udemy.com/course/logica-programacion-aprende-programar-en-cualquier-lenguaje/'},
  {id:2,tipo:'programación',activo:true,nivel:'básico',link:'https://www.udemy.com/course/fundamentos-de-programacion-web-para-principiantes/'},
  {id:3,tipo:'programación',activo:true,nivel:'básico',link:'https://www.udemy.com/course/aprende-logica-de-programacion/'},
  {id:4,tipo:'programación',activo:true,nivel:'básico',link:'https://www.udemy.com/course/programacion-todosloslenguajes/'},
  {id:5,tipo:'programación',activo:false,nivel:'intermedio',link:'https://www.udemy.com/course/algoritmos-estructuras-de-datos/'},
  {id:6,tipo:'programación',activo:true,nivel:'intermedio',link:'https://www.udemy.com/course/algoritmos-estructuras-de-datos/'},
  {id:7,tipo:'programación',activo:true,nivel:'intermedio',link:'https://www.udemy.com/course/algoritmos-estructuras-de-datos/'},
  {id:8,tipo:'programación',activo:false,nivel:'avanzado',link:'https://www.udemy.com/course/algoritmos-estructuras-de-datos/'},
  {id:9,tipo:'programación',activo:true,nivel:'avanzado',link:'https://www.udemy.com/course/algoritmos-estructuras-de-datos/'}
   ];
   displayedColumns: string[] = ['tipo','activo', 'nivel', 'link', 'acciones'];
   dataSource:MatTableDataSource<Cursos> = new MatTableDataSource<Cursos>(this.listaLinks);
   dataInicial = this.listaLinks;
  constructor() {
    this.variable=0;
   
   }


  
  ngOnInit(): void {
    console.log(this.listaLinks)
  this.dataSource.data = this.dataInicial
  }


  fondoNegro(){
    this.variable = 5;
    }
    fondoBlanco(){
      this.variable = 0;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    borrar(id:number){
      if (confirm('¿Está seguro de borrar?')) {
      const position = this.listaLinks.findIndex(element => element.id === id);
      this.listaLinks.splice(position,1)
      this.listaLinks = this.listaLinks
      this.dataSource.data = this.dataInicial
    }
  

}}
