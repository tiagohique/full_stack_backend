// src/livros/livros.service.ts

import { Injectable } from '@nestjs/common';
import { Livro } from './livro.interface';

@Injectable()
export class LivrosService {
  private livros: Livro[] = [
    { id: '1', nome: 'Livro irado' },
    { id: '2', nome: 'Livro muito legal' },
    { id: '3', nome: 'Livro mais que demais' },
  ];

  findAll(): Livro[] {
    return this.livros;
  }

  findOne(id: string): Livro {
    return this.livros.find(livro => livro.id === id);
  }

  create(livro: Livro): Livro {
    this.livros.push(livro);
    return livro;
  }

  update(id: string, livro: Livro): Livro {
    const index = this.livros.findIndex(l => l.id === id);
    if (index !== -1) {
      this.livros[index] = livro;
      return livro;
    }
    return livro;
  }

  delete(id: string): void {
    const index = this.livros.findIndex(l => l.id === id);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
