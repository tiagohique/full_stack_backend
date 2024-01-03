// src/livros/livros.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { Livro } from './livro.interface';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Get()
  findAll(): Livro[] {
    return this.livrosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Livro {
    return this.livrosService.findOne(id);
  }

  @Post()
  create(@Body() livro: Livro): Livro {
    return this.livrosService.create(livro);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() livro: Livro): Livro {
    return this.livrosService.update(id, livro);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    return this.livrosService.delete(id);
  }
}
