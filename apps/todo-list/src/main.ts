import { NestFactory } from '@nestjs/core';
import { TodoListModule } from './todo-list.module';

async function bootstrap() {
  const app = await NestFactory.create(TodoListModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
