import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentProcessingService {
  getHello(): string {
    return 'Hello World!';
  }
}
