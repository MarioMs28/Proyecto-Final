import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { IncidenciasVeterinarioComponent } from './pages/admin/incidencias-veterinario/incidencias-veterinario.component';
import { MedicamentosComponent } from './pages/admin/medicamentos/medicamentos.component';
import { IncidenciasClienteComponent } from './pages/admin/incidencias-cliente/incidencias-cliente.component'; // Asegúrate que esté importado
import { UsuariosComponent } from './pages/admin/usuarios/usuarios.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cliente', component: ClienteComponent },

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'incidencias-cliente', component: IncidenciasClienteComponent },
      { path: 'incidencias-veterinario', component: IncidenciasVeterinarioComponent },
      { path: 'medicamentos', component: MedicamentosComponent },
      { path: 'usuarios', component: UsuariosComponent } 
    ]
  }
];

export const appConfig = provideRouter(routes);
