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
  selector: 'app-incidencias-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './incidencias-cliente.component.html',
  styleUrls: ['./incidencias-cliente.component.css']
})
export class IncidenciasClienteComponent {
  incidencias: Incidencia[] = [
     {
      folio: 1,
      fecha: new Date('2025-05-25T09:30:00'),
      tipo: 'Problema en la página',
      nombre: 'Juan',
      apellidos: 'Pérez',
      correo: 'juan@example.com',
      telefono: '2281597531',
      descripcion: 'La página se queda congelada al enviar el formulario.',
      prioridad: 'alta'
    },

    {
      folio: 2,
      fecha: new Date('2025-05-26T09:30:00'),
      tipo: 'Problema en la página',
      nombre: 'Maria',
      apellidos: 'Pérez',
      correo: 'maria@example.com',
      telefono: '2283579564',
      descripcion: 'La página se queda congelada al seleccionar la incidencia.',
      prioridad: 'media'
    },

    {
      folio: 3,
      fecha: new Date('2025-05-27T09:30:00'),
      tipo: 'Problema en la página',
      nombre: 'Jorge',
      apellidos: 'Martinez',
      correo: 'jorge@example.com',
      telefono: '2285253678',
      descripcion: 'La página se queda congelada al agregar mi correo.',
      prioridad: 'baja'
    }
  ];

  respuesta: string = '';
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
    this.respuesta = '';
    this.mostrarDialogo = true;
  }

  enviarRespuesta() {
    if (this.respuesta.trim() && this.incidenciaSeleccionada) {
      alert(`Respuesta enviada a ${this.incidenciaSeleccionada.correo}:\n\n${this.respuesta}`);
      this.mostrarDialogo = false;
    }
  }

  cerrarDialogo() {
    this.mostrarDialogo = false;
  }
}
