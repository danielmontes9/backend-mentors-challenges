import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoListService {
  getHello(): string {
    return 'Hello World!';
  }
}
