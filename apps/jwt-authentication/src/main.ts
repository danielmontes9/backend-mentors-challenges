import { NestFactory } from '@nestjs/core';
import { JwtAuthenticationModule } from './jwt-authentication.module';

async function bootstrap() {
  const app = await NestFactory.create(JwtAuthenticationModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
