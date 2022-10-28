import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Cursos } from '../../../models/cursos';
import { MatTableDataSource } from '@angular/material/table';
import { CursosService } from '../../../services/cursos.service';
import { Observable, Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cursos-prog',
  templateUrl: './cursos-prog.component.html',
  styleUrls: ['./cursos-prog.component.css'],
})
export class CursosProgComponent implements OnInit , OnDestroy { 
  listaLinks!: Cursos[];
  suscripcion:any;
  variable: number;
  public page!: number;
  filterPost: any = '';
  ELEMENT_DATA!: Cursos[];
  private subs!: Subscription;
  displayedColumns: string[] = ['tipo', 'activo', 'nivel', 'link', 'acciones'];
  dataSource = new MatTableDataSource<Cursos>(this.ELEMENT_DATA);
  dataInicial = this.listaLinks;

  cursosObservable : Observable<Cursos[]>;
  
  constructor(private cursosService: CursosService, public router : Router) {
    this.variable = 0;


    this.cursosObservable = cursosService.obtenerCursosObservable();


  this.suscripcion = cursosService.obtenerCursosObservable().subscribe({
    next:(listaLinks : Cursos[])=>{
      this.listaLinks = listaLinks;
    },
    error:(error)=>{
      console.error(error);
    }
  }).unsubscribe();
    // cursosService
    //   .obtenerCursos()
    //   .then((valor: Cursos[]) => {
    //     console.log(valor);
    //     this.listaLinks = valor;
    //   })
    //   .catch((error: any) => {
    //     console.error(error);
    //   });

 }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {

 
  }

  fondoNegro() {
    this.variable = 5;
  }
  fondoBlanco() {
    this.variable = 0;
  }

 

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.listaLinks.filter = filterValue.trim().toLowerCase();
  // }

  borrar(id: number) {
    if (confirm('¿Está seguro de borrar?')) {
      const position = this.listaLinks.findIndex(
        (element) => element.id === id
      );
      this.listaLinks.splice(position, 1);
      this.listaLinks = this.listaLinks;
      this.dataSource.data = this.dataInicial;
    }
  }

 
  
}
