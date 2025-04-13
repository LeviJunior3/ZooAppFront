import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Animal } from '../shared/models/animal.model';
import { Cuidado } from '../shared/models/cuidado.model';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private readonly apiUrl = 'https://localhost:7270/api/animal';
  private readonly apiUrlCuidado = 'https://localhost:7270/api/cuidado';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getById(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  create(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.apiUrl, animal).pipe(
      catchError(this.handleError)
    );
  }

  update(id: number, animal: Animal): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, animal).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getCuidados(): Observable<Cuidado[]> {
    return this.http.get<Cuidado[]>(this.apiUrlCuidado);
  }

  private handleError(error: any) {
    console.error('Erro na requisição:', error);
    return throwError(() => new Error('Erro inesperado. Tente novamente mais tarde.'));
  }
}