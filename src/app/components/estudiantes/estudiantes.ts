import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Estudiante} from '../../models/estudiante.models';



@Component({
  selector: 'app-estudiantes',
  imports: [NgFor],
  templateUrl: './estudiantes.html',
  styleUrl: './estudiantes.css'
})

export class Estudiantes {
//estudiantes = ["Ana Lopez", "Luis Perez", "Carlos Pereida"];

 estudiantes: Estudiante[] = [
    { id: 12, nombre: 'Ana', apellido: 'Lopez', edad: 46 },
    { id: 26, nombre: 'Luis', apellido: 'Perez',   edad: 38 },
    { id: 38, nombre: 'Carlos', apellido: 'Pereida',   edad: 50}
  ];
}