import { NestFactory } from '@nestjs/core';
import { AdviceGeneratorModule } from './advice-generator.module';

async function bootstrap() {
  const app = await NestFactory.create(AdviceGeneratorModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
