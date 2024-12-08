import { Controller, Get } from '@nestjs/common';
import { PaymentProcessingService } from './payment-processing.service';

@Controller()
export class PaymentProcessingController {
  constructor(private readonly paymentProcessingService: PaymentProcessingService) {}

  @Get()
  getHello(): string {
    return this.paymentProcessingService.getHello();
  }
}
