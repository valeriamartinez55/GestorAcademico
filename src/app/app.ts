import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Components } from './components/components';
import { Navbar } from './components/navbar/navbar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Components, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestor-academico');
}
