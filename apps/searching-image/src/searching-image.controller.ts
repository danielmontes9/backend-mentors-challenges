import { Controller, Get } from '@nestjs/common';
import { SearchingImageService } from './searching-image.service';

@Controller()
export class SearchingImageController {
  constructor(private readonly searchingImageService: SearchingImageService) {}

  @Get()
  getHello(): string {
    return this.searchingImageService.getHello();
  }
}
