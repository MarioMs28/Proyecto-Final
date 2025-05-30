import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medicamentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent {
  stockMedicamentos = [
    { nombre: 'Amoxicilina', stock: 25 },
    { nombre: 'Desparasitante', stock: 8 },
    { nombre: 'Antibiótico', stock: 5 }
  ];

  solicitudesAlmacen = [
    {
      medicamento: 'Desparasitante',
      cantidad: 20,
      solicitadoPor: 'Juan Sánchez',
      motivo: 'Reposición urgente por demanda',
      fechaRequerida: '2025-05-20'
    }
  ];

  hayDesabasto(med: any): boolean {
    return med.stock <= 10;
  }
}
