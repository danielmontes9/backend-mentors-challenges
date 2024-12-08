import { NestFactory } from '@nestjs/core';
import { PhotoAiModule } from './photo-ai.module';

async function bootstrap() {
  const app = await NestFactory.create(PhotoAiModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
