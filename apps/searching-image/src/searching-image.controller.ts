import { Controller, Get, Param, Query } from '@nestjs/common';
import { SearchingImageService } from './searching-image.service';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('search-image')
export class SearchingImageController {
  constructor(private readonly searchingImageService: SearchingImageService) {}

  @Get('hello')
  @ApiOperation({ summary: 'Get Hello' })
  @ApiResponse({ status: 200, description: 'Returns a hello message.' })
  getHello(): string {
    return this.searchingImageService.getHello();
  }

  @Get('list')
  @ApiOperation({ summary: 'Get Photos List' })
  @ApiResponse({ status: 200, description: 'Returns a list of photos.' })
  async getPhotosList() {
    return this.searchingImageService.getPhotosList();
  }

  @Get('random')
  @ApiOperation({ summary: 'Get Random Photo' })
  @ApiQuery({
    name: 'query',
    required: false,
    description: 'Query string for searching photos',
  })
  @ApiResponse({ status: 200, description: 'Returns a random photo.' })
  async getRandomPhoto(@Query('query') query?: string) {
    return this.searchingImageService.getRandomPhoto(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Photo by ID' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the photo' })
  @ApiResponse({ status: 200, description: 'Returns a photo by ID.' })
  async getPhotoById(@Param('id') id: string) {
    return this.searchingImageService.getPhotoById(id);
  }

  @Get(':id/stadistics')
  @ApiOperation({ summary: 'Get Photo Stadistics' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the photo' })
  @ApiResponse({
    status: 200,
    description: 'Returns the statistics of a photo.',
  })
  async getPhotoStadistics(@Param('id') id: string) {
    return this.searchingImageService.getPhotoStadistics(id);
  }

  @Get(':id/download')
  @ApiOperation({ summary: 'Download Photo' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the photo' })
  @ApiResponse({ status: 200, description: 'Downloads a photo by ID.' })
  async downloadPhoto(@Param('id') id: string) {
    return this.searchingImageService.downloadPhoto(id);
  }
}
