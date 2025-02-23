import { Controller, Get, Param, Query } from '@nestjs/common';
import { SearchingImageService } from './searching-image.service';

@Controller('search-image')
export class SearchingImageController {
  constructor(private readonly searchingImageService: SearchingImageService) {}

  @Get('hello')
  getHello(): string {
    return this.searchingImageService.getHello();
  }

  @Get('list')
  async getPhotosList() {
    return this.searchingImageService.getPhotosList();
  }

  @Get('random')
  async getRandomPhoto(@Query('query') query?: string) {
    return this.searchingImageService.getRandomPhoto(query);
  }

  @Get(':id')
  async getPhotoById(@Param('id') id: string) {
    return this.searchingImageService.getPhotoById(id);
  }

  @Get(':id/stadistics')
  async getPhotoStadistics(@Param('id') id: string) {
    return this.searchingImageService.getPhotoStadistics(id);
  }

  @Get(':id/download')
  async downloadPhoto(@Param('id') id: string) {
    return this.searchingImageService.downloadPhoto(id);
  }
}
