import { Module } from '@nestjs/common';
import { TodoListController } from './todo-list.controller';
import { TodoListService } from './todo-list.service';

@Module({
  imports: [],
  controllers: [TodoListController],
  providers: [TodoListService],
})
export class TodoListModule {}
