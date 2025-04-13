import { OnInit } from "@angular/core";
import { Animal } from "../../shared/models/animal.model";
import { AnimalService } from "../animal.service";

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {
  animais: Animal[] = [];

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.loadAnimais();
  }

  loadAnimais() {
    this.animalService.getAll().subscribe(data => this.animais = data);
  }

  delete(id: number): void {
    this.animalService.delete(id).subscribe(() => {
      this.loadAnimais();
    });
  }
}