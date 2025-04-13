import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AnimalService } from '../animal.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Cuidado } from '../../shared/models/cuidado.model';
import { MatSelectModule } from '@angular/material/select';
import { dataPassadaValidator } from '../../shared/validators/data-passada.validator';

@Component({
  selector: 'app-animal-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './animal-form.component.html',
  styleUrl: './animal-form.component.scss'
})
export class AnimalFormComponent implements OnInit {
  animalForm: FormGroup;
  cuidados: Cuidado[] = [];
  selectedCuidados: number[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private animalService: AnimalService,
    private router: Router,

  ) {
    this.animalForm = this.fb.group({
      id: [0],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      dataNascimento: ['', [Validators.required, dataPassadaValidator]],
      especie: ['', Validators.required],
      habitat: ['', Validators.required],
      paisDeOrigem: ['', Validators.required],
      cuidadoIds: [[]],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.animalService.getById(Number(id)).subscribe((animal) => {
        const dataConvertida = new Date(animal.dataNascimento);
        this.animalForm.patchValue(
          {
            id: animal.id,
            nome: animal.nome,
            descricao: animal.descricao,
            dataNascimento: dataConvertida,
            especie: animal.especie,
            habitat: animal.habitat,
            paisDeOrigem: animal.paisDeOrigem,
            cuidadoIds: animal.cuidadoIds
          }
        );
      });
    }
    this.animalService.getCuidados().subscribe((cuidados) => {
      this.cuidados = cuidados;
    });
  }

  onSubmit(): void {
    if (this.animalForm.valid) {
      const id = this.route.snapshot.paramMap.get('id');
      const animal = { ...this.animalForm.value };

      const data = new Date(animal.dataNascimento);
      animal.dataNascimento = data.toISOString().split('T')[0];

      if (id) {
        this.animalService.update(Number(id), animal).subscribe(() => {
          this.router.navigate(['/animais']);
        });
      } else {
        this.animalService.create(animal).subscribe(() => {
          this.router.navigate(['/animais']);
        });
      }
    }
  }
}
