import { Component } from '@angular/core';
import { About } from '../components/about/about';
import { Estudiantes } from '../components/estudiantes/estudiantes';
import { Home } from '../components/home/home';
import { Materias } from '../components/materias/materias';
import { Navbar } from '../components/navbar/navbar';

@Component({
  selector: 'app-components',
  imports: [About, Estudiantes, Home, Materias, Navbar],
  templateUrl: './components.html',
  styleUrl: './components.css'
})
export class Components {

}
