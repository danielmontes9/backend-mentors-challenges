import { NestFactory } from '@nestjs/core';
import { PaymentProcessingModule } from './payment-processing.module';

async function bootstrap() {
  const app = await NestFactory.create(PaymentProcessingModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
