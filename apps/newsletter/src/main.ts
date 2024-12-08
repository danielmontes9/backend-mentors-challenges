import { NestFactory } from '@nestjs/core';
import { NewsletterModule } from './newsletter.module';

async function bootstrap() {
  const app = await NestFactory.create(NewsletterModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
