import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CuidadoService } from '../cuidado.service';

@Component({
  selector: 'app-cuidado-list',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './cuidado-list.component.html',
  styleUrl: './cuidado-list.component.scss'
})
export class CuidadoListComponent {
  cuidadoService = inject(CuidadoService);
  cuidados: any[] = [];

  constructor(private router: Router) {
    this.cuidadoService.getAll().subscribe({
      next: (data) => this.cuidados = data,
      error: (err) => console.error('Erro ao carregar cuidados:', err),
    });
  }

  editar(id: string): void {
    this.router.navigate(['/cuidados/editar', id]);
  }

  excluir(id: number): void {
    this.cuidadoService.delete(id).subscribe(() => {
      this.cuidadoService.getAll().subscribe((data) => {
        this.cuidados = data;
      });
    });
  }
}
