import { Component, OnInit, ViewChild } from '@angular/core';
import { Cursos } from '../../../models/cursos';
import { MatTableDataSource } from '@angular/material/table';
import { CursosService } from '../../../services/cursos.service';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-cursos-prog',
  templateUrl: './cursos-prog.component.html',
  styleUrls: ['./cursos-prog.component.css']
})
export class CursosProgComponent implements OnInit {
 listaLinks!:Cursos[];

 variable:number;
 public page!:number 
  filterPost:any=''
  ELEMENT_DATA!:Cursos[];
  
  displayedColumns: string[] = ['tipo','activo', 'nivel', 'link', 'acciones'];
  dataSource =new MatTableDataSource<Cursos>(this.ELEMENT_DATA);
  dataInicial = this.listaLinks;

  constructor( private cursosService :CursosService) {
    this.variable=0;
 
   }


  ngOnInit(): void {



 this.listaLinks = this.cursosService.obtenerCursos();
 console.log(this.listaLinks)
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

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
    // applyFilter(event: Event) {
    //   const filterValue = (event.target as HTMLInputElement).value;
    //   this.listaLinks.filter = filterValue.trim().toLowerCase();
    // }

    borrar(id:number){
      if (confirm('¿Está seguro de borrar?')) {
      const position = this.listaLinks.findIndex(element => element.id === id);
      this.listaLinks.splice(position,1)
      this.listaLinks = this.listaLinks
      this.dataSource.data = this.dataInicial
    }}


}
