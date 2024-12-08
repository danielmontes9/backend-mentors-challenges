import { Test, TestingModule } from '@nestjs/testing';
import { SearchingImageController } from './searching-image.controller';
import { SearchingImageService } from './searching-image.service';

describe('SearchingImageController', () => {
  let searchingImageController: SearchingImageController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SearchingImageController],
      providers: [SearchingImageService],
    }).compile();

    searchingImageController = app.get<SearchingImageController>(SearchingImageController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(searchingImageController.getHello()).toBe('Hello World!');
    });
  });
});
