import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsletterService {
  getHello(): string {
    return 'Hello World!';
  }
}
