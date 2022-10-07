import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioUsuario!: FormGroup;

  constructor(public dialog: MatDialog, private fb: FormBuilder) { 

  
  this.formularioUsuario = fb.group({
    nombre: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required,Validators.email]),
    contrasenia: new FormControl('', [Validators.required,Validators.minLength(5),Validators.pattern('^.*[A-Z]+.*$')])
  });
}



  ngOnInit(): void {
  }

  agregarUsuario(){

  }

  

  
}

 


