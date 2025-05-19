import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incidencias-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './incidencias-cliente.component.html',
  styleUrls: ['./incidencias-cliente.component.css']
})
export class IncidenciasClienteComponent {
  incidencias = [
    {
      tipo: 'Error en la página',
      nombre: 'Juan',
      apellidos: 'Pérez',
      correo: 'juan@example.com',
      telefono: '1234567890',
      descripcion: 'La página se queda congelada al enviar el formulario.'
    },
    {
      tipo: 'Problema de salud con la mascota',
      nombre: 'Ana',
      apellidos: 'García',
      correo: 'ana@example.com',
      telefono: '0987654321',
      descripcion: 'Mi perro tiene vómito después del medicamento.'
    }
  ];
}
