import { Controller, Get } from '@nestjs/common';
import { AdviceGeneratorService } from './advice-generator.service';
@Controller()
export class AdviceGeneratorController {
  constructor(
    private readonly adviceGeneratorService: AdviceGeneratorService,
  ) {}

  @Get('advice')
  getHello(): string {
    return this.adviceGeneratorService.getHello();
  }
}
