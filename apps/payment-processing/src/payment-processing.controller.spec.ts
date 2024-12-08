import { Test, TestingModule } from '@nestjs/testing';
import { PaymentProcessingController } from './payment-processing.controller';
import { PaymentProcessingService } from './payment-processing.service';

describe('PaymentProcessingController', () => {
  let paymentProcessingController: PaymentProcessingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PaymentProcessingController],
      providers: [PaymentProcessingService],
    }).compile();

    paymentProcessingController = app.get<PaymentProcessingController>(PaymentProcessingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(paymentProcessingController.getHello()).toBe('Hello World!');
    });
  });
});
