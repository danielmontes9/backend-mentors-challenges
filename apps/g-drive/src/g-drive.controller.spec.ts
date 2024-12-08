import { Test, TestingModule } from '@nestjs/testing';
import { GDriveController } from './g-drive.controller';
import { GDriveService } from './g-drive.service';

describe('GDriveController', () => {
  let gDriveController: GDriveController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GDriveController],
      providers: [GDriveService],
    }).compile();

    gDriveController = app.get<GDriveController>(GDriveController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(gDriveController.getHello()).toBe('Hello World!');
    });
  });
});
