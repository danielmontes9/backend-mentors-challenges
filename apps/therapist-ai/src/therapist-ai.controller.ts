import { Controller, Get } from '@nestjs/common';
import { TherapistAiService } from './therapist-ai.service';

@Controller()
export class TherapistAiController {
  constructor(private readonly therapistAiService: TherapistAiService) {}

  @Get()
  getHello(): string {
    return this.therapistAiService.getHello();
  }
}
