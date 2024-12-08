import { Injectable } from '@nestjs/common';

@Injectable()
export class TherapistAiService {
  getHello(): string {
    return 'Hello World!';
  }
}
