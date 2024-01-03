// src/app.module.ts

import { Module } from '@nestjs/common';
import { LivrosModule } from './livros/livros.module';

@Module({
  imports: [LivrosModule],
})
export class AppModule {}
