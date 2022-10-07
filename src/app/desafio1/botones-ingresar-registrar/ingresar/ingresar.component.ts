import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {
  formularioUsuario!: FormGroup;
  constructor(public dialog: MatDialog, private fb: FormBuilder) { 

  
    this.formularioUsuario = fb.group({
     
      correo: new FormControl('', [Validators.required,Validators.email]),
      contrasenia: new FormControl('', [Validators.required])
    });
  }
  
  ngOnInit(): void {
  }
  agregarUsuario(){

  }

  
}
