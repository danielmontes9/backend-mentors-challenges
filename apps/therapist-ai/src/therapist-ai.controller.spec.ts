import { Test, TestingModule } from '@nestjs/testing';
import { TherapistAiController } from './therapist-ai.controller';
import { TherapistAiService } from './therapist-ai.service';

describe('TherapistAiController', () => {
  let therapistAiController: TherapistAiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TherapistAiController],
      providers: [TherapistAiService],
    }).compile();

    therapistAiController = app.get<TherapistAiController>(TherapistAiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(therapistAiController.getHello()).toBe('Hello World!');
    });
  });
});
