import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios = [
  { id: 1, username: 'admin', correo: 'admin@mail.com', password: '1234', tipo: 'admin' },
  { id: 2, username: 'cliente1', correo: 'cliente1@mail.com', password: '5678', tipo: 'cliente' },
  { id: 3, username: 'cliente2', correo: 'cliente2@mail.com', password: 'abcd', tipo: 'cliente' },
  { id: 4, username: 'veterinario', correo: 'vet@mail.com', password: 'vetpass', tipo: 'admin' },
  { id: 5, username: 'almacen', correo: 'almacen@mail.com', password: 'almacenpass', tipo: 'admin' }
];
usuariosBloqueados: number[] = [];

  ngOnInit(): void {
    const bloqueados = localStorage.getItem('usuariosBloqueados');
    this.usuariosBloqueados = bloqueados ? JSON.parse(bloqueados) : [];
  }

  bloquearUsuario(id: number): void {
    if (!this.usuariosBloqueados.includes(id)) {
      this.usuariosBloqueados.push(id);
      localStorage.setItem('usuariosBloqueados', JSON.stringify(this.usuariosBloqueados));
    }
  }

  desbloquearUsuario(id: number): void {
    this.usuariosBloqueados = this.usuariosBloqueados.filter(uid => uid !== id);
    localStorage.setItem('usuariosBloqueados', JSON.stringify(this.usuariosBloqueados));
  }

  estaBloqueado(id: number): boolean {
    return this.usuariosBloqueados.includes(id);
  }
}
