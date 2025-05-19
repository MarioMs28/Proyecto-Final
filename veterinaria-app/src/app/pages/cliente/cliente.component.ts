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
  nombre: string = '';
  apellidos: string = '';
  correo: string = '';
  telefono: string = '';
  descripcion: string = '';

  enviarFormulario() {
    if (!this.tipoIncidencia || !this.nombre || !this.apellidos || !this.descripcion || !this.correo || !this.telefono) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    
    alert('Formulario enviado correctamente.\n\n' +
      `Tipo: ${this.tipoIncidencia}\n` +
      `Nombre: ${this.nombre} ${this.apellidos}\n` +
      `Correo: ${this.correo}\n` +
      `Teléfono: ${this.telefono}\n` +
      `Descripción: ${this.descripcion}`);

    
    this.tipoIncidencia = '';
    this.nombre = '';
    this.apellidos = '';
    this.correo = '';
    this.telefono = '';
    this.descripcion = '';
  }
}
