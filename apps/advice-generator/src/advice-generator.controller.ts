import { Controller, Get, Query } from '@nestjs/common';
import { AdviceGeneratorService } from './advice-generator.service';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller()
export class AdviceGeneratorController {
  constructor(
    private readonly adviceGeneratorService: AdviceGeneratorService,
  ) {}

  @Get('advice')
  getHello(): string {
    return this.adviceGeneratorService.getHello();
  }

  @Get('random')
  @ApiOperation({ summary: 'Get random photo by query' })
  @ApiParam({
    name: 'query',
    type: String,
    required: false,
    description: 'Query for photo',
  })
  async getRandomPhoto(@Query('query') query?: string) {
    return this.adviceGeneratorService.getRandomPhoto(query);
  }
}
