import { Routes } from '@angular/router';

import { AnimalFormComponent } from './animals/animal-form/animal-form.component';
import { AnimalListComponent } from './animals/animal-list/animal-list.component';
import { CuidadoFormComponent } from './cuidados/cuidado-form/cuidado-form.component';
import { CuidadoListComponent } from './cuidados/cuidado-list/cuidado-list.component';

export const routes: Routes = [
  { path: 'animais', component: AnimalListComponent },
  { path: 'animais/novo', component: AnimalFormComponent },
  { path: 'animais/editar/:id', component: AnimalFormComponent },
  { path: 'cuidados', component: CuidadoListComponent },
  { path: 'cuidados/novo', component: CuidadoFormComponent },
  { path: 'cuidados/editar/:id', component: CuidadoFormComponent },
  { path: '', redirectTo: '/animais', pathMatch: 'full' }
];
