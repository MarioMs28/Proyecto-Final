import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuarios = [
  { username: 'admin', correo: 'admin@mail.com', password: '1234', tipo: 'admin' },
  { username: 'cliente1', correo: 'cliente1@mail.com', password: '5678', tipo: 'cliente' },
  { username: 'cliente2', correo: 'cliente2@mail.com', password: 'abcd', tipo: 'cliente' },
  { username: 'veterinario', correo: 'vet@mail.com', password: 'vetpass', tipo: 'admin' },
  { username: 'almacen', correo: 'almacen@mail.com', password: 'almacenpass', tipo: 'admin' }
];

}