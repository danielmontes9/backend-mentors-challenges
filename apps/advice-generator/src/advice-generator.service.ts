import { Injectable } from '@nestjs/common';

@Injectable()
export class AdviceGeneratorService {
  getHello(): string {
    return 'Hello World!';
  }
}
