import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Incidencia {
  folio: number;
  fecha: Date;
  tipo: string;
  nombre: string;
  apellidos: string;
  correo: string;
  telefono: string;
  descripcion: string;
  prioridad: 'alta' | 'media' | 'baja';
}

@Component({
  selector: 'app-incidencias-veterinario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './incidencias-veterinario.component.html',
  styleUrls: ['./incidencias-veterinario.component.css']
})
export class IncidenciasVeterinarioComponent {
  incidencias: Incidencia[] = [
    {
      folio: 1,
      fecha: new Date('2025-05-25T11:30:00'),
      tipo: 'Problema con medicamentos',
      nombre: 'Ana',
      apellidos: 'García',
      correo: 'ana@example.com',
      telefono: '2282587913',
      descripcion: 'Me dieron medicamentos caducados.',
      prioridad: 'baja'
    },
    {
      folio: 2,
      fecha: new Date('2025-05-26T01:30:00'),
      tipo: 'Problema con medicamentos',
      nombre: 'Jose',
      apellidos: 'Perez',
      correo: 'perez@example.com',
      telefono: '2281239755',
      descripcion: 'Mi perro tiene una reacción por el medicamento.',
      prioridad: 'media'
    },
    {
      folio: 3,
      fecha: new Date('2025-05-27T11:30:00'),
      tipo: 'Problema con medicamentos',
      nombre: 'alex',
      apellidos: 'García',
      correo: 'alex@example.com',
      telefono: '2287891235',
      descripcion: 'Me dieron medicamentos distintos.',
      prioridad: 'alta'
    }
  ];

  receta: string = '';
  incidenciaSeleccionada: Incidencia | null = null;
  mostrarDialogo = false;

  constructor() {
    this.incidencias = this.ordenarPorPrioridad(this.incidencias);
  }

  ordenarPorPrioridad(incidencias: Incidencia[]): Incidencia[] {
    const orden: Record<'alta' | 'media' | 'baja', number> = {
      alta: 1,
      media: 2,
      baja: 3,
    };
    return incidencias.sort((a, b) => orden[a.prioridad] - orden[b.prioridad]);
  }

  abrirDialogo(incidencia: Incidencia) {
    this.incidenciaSeleccionada = incidencia;
    this.receta = '';
    this.mostrarDialogo = true;
  }

  enviarRespuesta() {
    if (this.receta.trim() && this.incidenciaSeleccionada) {
      alert(`Receta enviada a ${this.incidenciaSeleccionada.correo}:\n\n${this.receta}`);
      this.mostrarDialogo = false;
    }
  }

  cerrarDialogo() {
    this.mostrarDialogo = false;
  }
}
