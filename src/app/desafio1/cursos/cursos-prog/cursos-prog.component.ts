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
 
  suscripcion:any;
  variable: number;
  
  
  private subs: Subscription;

  public page!:number 
  filterPost:any=''
  ELEMENT_DATA!:Cursos[];
    displayedColumns: string[] = ['tipo', 'activo','nivel', 'link','acciones'];
    dataSource =new MatTableDataSource<Cursos>(this.ELEMENT_DATA);
  

  
  constructor(public cursosService: CursosService, public router : Router) {
    this.variable = 0;

    this.subs = new Subscription();
    
   
 
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
   
    let resp = this.cursosService.getCursos();
    resp.subscribe(report=>this.dataSource.data=report)
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
  editar(id:string){
    
    this.router.navigate([`editarCurso/${id}`]);
   
  }
  borrarCurso(curso: string) {
    
    if (confirm('esta seguro de borrar')) {
      
      this.subs.add(
        this.cursosService.eliminarCurso(curso).subscribe({
          next: (result) => {
          setTimeout(() => {
            let resp = this.cursosService.getCursos();
            resp.subscribe(report=>this.dataSource.data=report)
          }, 50);
          
          
          },
          error: (err) => {
            console.log(err.status);
          },
        })
      );
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 agregarCurso(){
  this.router.navigate(['nuevoCurso']);
 }
 
  
}
