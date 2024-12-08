import { NestFactory } from '@nestjs/core';
import { SearchingImageModule } from './searching-image.module';

async function bootstrap() {
  const app = await NestFactory.create(SearchingImageModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
