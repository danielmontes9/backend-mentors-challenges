import { Test, TestingModule } from '@nestjs/testing';
import { JwtAuthenticationController } from './jwt-authentication.controller';
import { JwtAuthenticationService } from './jwt-authentication.service';

describe('JwtAuthenticationController', () => {
  let jwtAuthenticationController: JwtAuthenticationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [JwtAuthenticationController],
      providers: [JwtAuthenticationService],
    }).compile();

    jwtAuthenticationController = app.get<JwtAuthenticationController>(JwtAuthenticationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(jwtAuthenticationController.getHello()).toBe('Hello World!');
    });
  });
});
