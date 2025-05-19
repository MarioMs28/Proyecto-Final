import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private rol: string = '';

  setRol(rol: string) {
    this.rol = rol;
    localStorage.setItem('rol', rol); // Guardar en localStorage
  }

  getRol(): string {
    if (!this.rol) {
      this.rol = localStorage.getItem('rol') || '';
    }
    return this.rol;
  }

  isAdmin(): boolean {
    return this.getRol() === 'admin';
  }

  isAlmacen(): boolean {
    return this.getRol() === 'almacen';
  }

  isVeterinario(): boolean {
    return this.getRol() === 'veterinario';
  }
}
