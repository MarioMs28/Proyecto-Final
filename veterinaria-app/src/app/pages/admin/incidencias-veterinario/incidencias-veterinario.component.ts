import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incidencias-veterinario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './incidencias-veterinario.component.html',
  styleUrls: ['./incidencias-veterinario.component.css']
})
export class IncidenciasVeterinarioComponent {
  incidenciasVeterinario = [
    {
      folioMascota: 'MX1234',
      nombreCliente: 'Carlos Pérez',
      problema: 'Reacción alérgica al medicamento X',
    },
    {
      folioMascota: 'MX5678',
      nombreCliente: 'Laura Torres',
      problema: 'Fiebre alta y vómito',
    },
    {
      folioMascota: 'MX9012',
      nombreCliente: 'Elena Castillo',
      problema: 'Infección en la piel con secreción',
    },
    {
      folioMascota: 'MX3456',
      nombreCliente: 'Roberto Díaz',
      problema: 'Dificultad para respirar y tos',
    },
    {
      folioMascota: 'MX7890',
      nombreCliente: 'Sandra Ruiz',
      problema: 'Letargo, pérdida de apetito y debilidad',
    }
  ];
}
