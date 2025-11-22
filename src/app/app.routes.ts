import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Estudiantes } from './components/estudiantes/estudiantes';
import { Materias } from './components/materias/materias';
import { About } from './components/about/about';
import { Navbar } from './components/navbar/navbar';

export const routes: Routes = [
    {path: '',component: Home},
    {path: 'estudiantes',component: Estudiantes},
    {path: 'materias',component: Materias},
    {path: 'about',component: About},
    {path: 'navbar',component: Navbar}
];
