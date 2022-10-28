import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../botones-ingresar-registrar/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IngresarComponent } from '../botones-ingresar-registrar/ingresar/ingresar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog, public router : Router) { }
  agregarCurso(){
    this.router.navigate([`nuevoCurso`]);
  }
  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  openDialog2(): void {
    const dialogRef = this.dialog.open(IngresarComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  

  

}
