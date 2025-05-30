import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';

    constructor(private router: Router, private authService: AuthService) {}

  login() {
  if (this.usuario === 'admin' && this.contrasena === 'admin@123') {
    this.authService.setRol('admin');
    this.router.navigate(['/admin/usuarios']); 
  } else if (this.usuario === 'almacen' && this.contrasena === 'almacen') {
    this.authService.setRol('almacen');
    this.router.navigate(['/admin/medicamentos']); 
  } else if (this.usuario === 'veterinario' && this.contrasena === 'veterinario') {
    this.authService.setRol('veterinario');
    this.router.navigate(['/admin/incidencias-veterinario']); 
  } else {
    alert('Credenciales inválidas');
  }
}


  irAFormularioCliente() {
    this.router.navigate(['/cliente']);
  }
}
