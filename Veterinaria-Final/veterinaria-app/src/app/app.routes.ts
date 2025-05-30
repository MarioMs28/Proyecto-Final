import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { IncidenciasVeterinarioComponent } from './pages/admin/incidencias-veterinario/incidencias-veterinario.component';
import { MedicamentosComponent } from './pages/admin/medicamentos/medicamentos.component';
import { IncidenciasClienteComponent } from './pages/admin/incidencias-cliente/incidencias-cliente.component';
import { UsuariosComponent } from './pages/admin/usuarios/usuarios.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cliente', component: ClienteComponent },

  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard], 
    children: [
      { path: 'incidencias-cliente', component: IncidenciasClienteComponent, canActivate: [AuthGuard] },
      { path: 'incidencias-veterinario', component: IncidenciasVeterinarioComponent, canActivate: [AuthGuard] },
      { path: 'medicamentos', component: MedicamentosComponent, canActivate: [AuthGuard] },
      { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard] }
    ]
  }
];

export const appConfig = provideRouter(routes);
