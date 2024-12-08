import { Controller, Get } from '@nestjs/common';
import { PhotoAiService } from './photo-ai.service';

@Controller()
export class PhotoAiController {
  constructor(private readonly photoAiService: PhotoAiService) {}

  @Get()
  getHello(): string {
    return this.photoAiService.getHello();
  }
}
