import { NestFactory } from '@nestjs/core';
import { AppSample2Module } from './app-sample-2.module';

async function bootstrap() {
  const app = await NestFactory.create(AppSample2Module);
  await app.listen(3001);
}
bootstrap();
