import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  titulo: string = '';
  mostrarNotificacion: boolean = false;
  mostrarArchivoAdjunto: boolean = false;
  archivoAdjuntoNombre: string | null = null;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
      return;
    }

    if (this.authService.isAdmin()) {
      this.titulo = 'Panel del Administrador';
    } else if (this.authService.isVeterinario()) {
      this.titulo = 'Panel del Veterinario';
    } else if (this.authService.isAlmacen()) {
      this.titulo = 'Panel de Almacén';
    } else {
      this.titulo = 'Panel';
    }

    const nuevaIncidencia = localStorage.getItem('nuevaIncidencia');
    if (nuevaIncidencia === 'true') {
      this.mostrarNotificacion = true;
      localStorage.removeItem('nuevaIncidencia');
    }

    const archivo = localStorage.getItem('archivoAdjuntoNombre');
    if (archivo) {
      this.archivoAdjuntoNombre = archivo;
      this.mostrarArchivoAdjunto = true;
      localStorage.removeItem('archivoAdjuntoNombre');
    }
  }

  logout(): void {
    localStorage.clear();
    window.location.href = '/';
  }

  cerrarNotificacionIncidencia(): void {
    this.mostrarNotificacion = false;
  }

  cerrarNotificacionArchivo(): void {
    this.mostrarArchivoAdjunto = false;
    this.archivoAdjuntoNombre = null;
  }
}
