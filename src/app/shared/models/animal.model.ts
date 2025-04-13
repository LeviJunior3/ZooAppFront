import { Cuidado } from './cuidado.model';

export interface Animal {
  id: number;
  nome: string;
  descricao: string;
  dataNascimento: string;
  especie: string;
  habitat: string;
  paisDeOrigem: string;
  cuidadoIds?: Cuidado[];
}