import { Module } from '@nestjs/common';
import { PaymentProcessingController } from './payment-processing.controller';
import { PaymentProcessingService } from './payment-processing.service';

@Module({
  imports: [],
  controllers: [PaymentProcessingController],
  providers: [PaymentProcessingService],
})
export class PaymentProcessingModule {}
