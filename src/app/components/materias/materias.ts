import { Component } from '@angular/core';
import { Materia } from '../../models/materia.models';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-materias',
  imports: [NgFor],
  templateUrl: './materias.html',
  styleUrl: './materias.css'
})
export class Materias {
//materias = ["Matemáticas", "Historia", "Biología"];

 materia: Materia[] = [
    { id: 1, nombre: 'Matemáticas', creditos: 4 },
    { id: 2, nombre: 'Historia',     creditos: 3 },
    { id: 3, nombre: 'Biología',     creditos: 5 }
  ];
}
