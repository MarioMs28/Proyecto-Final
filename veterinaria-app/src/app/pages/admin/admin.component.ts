import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  titulo: string = '';

  constructor(public authService: AuthService) {
    // Establecer el título según el tipo de usuario
    if (this.authService.isAdmin()) {
      this.titulo = 'Panel del Administrador';
    } else if (this.authService.isVeterinario()) {
      this.titulo = 'Panel del Veterinario';
    } else if (this.authService.isAlmacen()) {
      this.titulo = 'Panel de Almacén';
    } else {
      this.titulo = 'Panel'; // Por si acaso
    }
  }
}
