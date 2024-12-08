import { Injectable } from '@nestjs/common';

@Injectable()
export class PhotoAiService {
  getHello(): string {
    return 'Hello World!';
  }
}
