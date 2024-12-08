import { NestFactory } from '@nestjs/core';
import { GDriveModule } from './g-drive.module';

async function bootstrap() {
  const app = await NestFactory.create(GDriveModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
