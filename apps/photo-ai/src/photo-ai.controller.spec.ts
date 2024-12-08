import { Test, TestingModule } from '@nestjs/testing';
import { PhotoAiController } from './photo-ai.controller';
import { PhotoAiService } from './photo-ai.service';

describe('PhotoAiController', () => {
  let photoAiController: PhotoAiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PhotoAiController],
      providers: [PhotoAiService],
    }).compile();

    photoAiController = app.get<PhotoAiController>(PhotoAiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(photoAiController.getHello()).toBe('Hello World!');
    });
  });
});
