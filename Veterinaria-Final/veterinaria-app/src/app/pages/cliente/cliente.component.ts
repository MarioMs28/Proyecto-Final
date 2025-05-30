import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  tipoIncidencia: string = '';
  nivelPrioridad: string = '';
  nombre: string = '';
  apellidos: string = '';
  correo: string = '';
  telefono: string = '';
  descripcion: string = '';
  nombreArchivo: string = ''; 

  enviarFormulario(): void {
    if (!this.tipoIncidencia || !this.nombre || !this.apellidos || !this.descripcion || !this.correo || !this.telefono) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const nuevaIncidencia = {
      tipo: this.tipoIncidencia,
      prioridad: this.nivelPrioridad,
      nombre: this.nombre,
      apellidos: this.apellidos,
      correo: this.correo,
      telefono: this.telefono,
      descripcion: this.descripcion,
      archivo: this.nombreArchivo
    };

    const incidenciasGuardadas = JSON.parse(localStorage.getItem('incidenciasCliente') || '[]');
    incidenciasGuardadas.push(nuevaIncidencia);
    localStorage.setItem('incidenciasCliente', JSON.stringify(incidenciasGuardadas));

    // Notificación de nueva incidencia//
    localStorage.setItem('nuevaIncidencia', 'true');

    
    if (this.nombreArchivo) {
      localStorage.setItem('archivoAdjuntoNombre', this.nombreArchivo);
    }

    alert('Formulario enviado correctamente.\n\n' +
      `Tipo: ${this.tipoIncidencia}\n` +
      `Prioridad: ${this.nivelPrioridad}\n` +
      `Nombre: ${this.nombre} ${this.apellidos}\n` +
      `Correo: ${this.correo}\n` +
      `Teléfono: ${this.telefono}\n` +
      `Descripción: ${this.descripcion}`);

    // Resetear el formulario//
    this.tipoIncidencia = '';
    this.nivelPrioridad = '';
    this.nombre = '';
    this.apellidos = '';
    this.correo = '';
    this.telefono = '';
    this.descripcion = '';
    this.nombreArchivo = '';
  }

  adjuntarArchivo(event: any): void {
    const archivo = event.target.files[0];
    if (archivo) {
      this.nombreArchivo = archivo.name;
    } else {
      this.nombreArchivo = '';
    }
  }
}
