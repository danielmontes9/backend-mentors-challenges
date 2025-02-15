import { Controller, Get, Param, Query } from '@nestjs/common';
import { SearchingImageService } from './searching-image.service';
// import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('search-image')
export class SearchingImageController {
  constructor(private readonly searchingImageService: SearchingImageService) {}

  @Get('hello')
  getHello(): string {
    return this.searchingImageService.getHello();
  }

  @Get('random')
  async getRandomPhoto(@Query('query') query?: string) {
    console.log('query', query);
    return this.searchingImageService.getRandomPhoto(query);
  }

  @Get(':id')
  async getPhotoById(@Param('id') id: string) {
    return this.searchingImageService.getPhotoById(id);
  }
}
