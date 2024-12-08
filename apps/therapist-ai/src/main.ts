import { NestFactory } from '@nestjs/core';
import { TherapistAiModule } from './therapist-ai.module';

async function bootstrap() {
  const app = await NestFactory.create(TherapistAiModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
