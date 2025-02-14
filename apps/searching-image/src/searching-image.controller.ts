import { Controller, Get, Query } from '@nestjs/common';
import { SearchingImageService } from './searching-image.service';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller()
export class SearchingImageController {
  constructor(private readonly searchingImageService: SearchingImageService) {}

  @Get('/search-image')
  getHello(): string {
    return this.searchingImageService.getHello();
  }

  @Get('/random-image')
  @ApiOperation({ summary: 'Get random photo by query' })
  @ApiParam({
    name: 'query',
    type: String,
    required: false,
    description: 'Query for photo',
  })
  async getRandomPhoto(@Query('query') query?: string) {
    return this.searchingImageService.getRandomPhoto(query);
  }
}
