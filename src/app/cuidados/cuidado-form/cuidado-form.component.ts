import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { CuidadoService } from '../cuidado.service';

@Component({
  selector: 'app-cuidado-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './cuidado-form.component.html',
  styleUrls: ['./cuidado-form.component.scss'],
})
export class CuidadoFormComponent {
  cuidadoForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private cuidadoService: CuidadoService,) {
    this.cuidadoForm = this.fb.group({
      id: [0],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      frequencia: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.cuidadoService.getById(id).subscribe(cuidado => {
        this.cuidadoForm.patchValue({
          id: cuidado.id,
          nome: cuidado.nome,
          descricao: cuidado.descricao,
          frequencia: cuidado.frequencia,
          animalId: cuidado.animalId,
        });
      });
    }
  }

  onSubmit(): void {
    if (this.cuidadoForm.invalid) return;

    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.cuidadoService.update(id, this.cuidadoForm.value).subscribe(() => {
        this.router.navigate(['/cuidados']);
      });
    } else {
      this.cuidadoService.create(this.cuidadoForm.value).subscribe(() => {
        this.router.navigate(['/cuidados']);
      });
    }
  }
}