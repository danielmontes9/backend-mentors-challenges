import { Test, TestingModule } from '@nestjs/testing';
import { AdviceGeneratorController } from './advice-generator.controller';
import { AdviceGeneratorService } from './advice-generator.service';

describe('AdviceGeneratorController', () => {
  let adviceGeneratorController: AdviceGeneratorController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AdviceGeneratorController],
      providers: [AdviceGeneratorService],
    }).compile();

    adviceGeneratorController = app.get<AdviceGeneratorController>(AdviceGeneratorController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(adviceGeneratorController.getHello()).toBe('Hello World!');
    });
  });
});
