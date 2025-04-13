import { AbstractControl, ValidationErrors } from '@angular/forms';

export function dataPassadaValidator(control: AbstractControl): ValidationErrors | null {
  const valor: Date = control.value;

  if (!valor) return null;

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  if (valor > hoje) {
    return { dataFutura: true };
  }

  return null;
}