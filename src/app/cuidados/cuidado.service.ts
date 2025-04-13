import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError, Observable } from 'rxjs';
import { Cuidado } from '../shared/models/cuidado.model';

@Injectable({
  providedIn: 'root',
})
export class CuidadoService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7270/api/cuidado';

  getAll(): Observable<Cuidado[]> {
    return this.http.get<Cuidado[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getById(id: number): Observable<Cuidado> {
    return this.http.get<Cuidado>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  create(cuidado: Cuidado): Observable<Cuidado> {
    return this.http.post<Cuidado>(this.apiUrl, cuidado).pipe(
      catchError(this.handleError)
    );
  }

  update(id: number, cuidado: Cuidado): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, cuidado).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Erro na requisição:', error);
    return throwError(() => new Error('Algo deu errado. Tente novamente mais tarde.'));
  }
}