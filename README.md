# ZooApp

Este projeto está usando o [Angular CLI](https://github.com/angular/angular-cli) versão 19.2.7.

## Tecnologias utilizadas
Angular 19+

Angular Material

TypeScript

RxJS

SCSS

Formulários Reativos

Comunicação com API REST

## Instale as dependências 

To start a local development server, run:

```bash
npm install
```

## Como rodar o projeto

```bash
ng serve
```

## Estrutura do projeto

- src/app/animais: componentes e serviços relacionados aos animais.

- src/app/cuidados: componentes e serviços dos cuidados.

- src/app/shared: modelos e utilitários compartilhados.

## Backend

Certifique-se de que o backend ASP.NET Core (ZooApi) esteja rodando em paralelo na porta configurada, como https://localhost:7270 ou altere os arquivos Cuidado.service.ts e Animal.service.ts

## Recursos do projeto

- A relação entre Animais e Cuidados é muitos-para-muitos.

- As datas são manipuladas com mat-datepicker e validadas para impedir datas futuras.

- Vocês pode criar, editar, excluir e ver todos os Animais e Cuidados.