import { Controller, Get } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';

@Controller()
export class NewsletterController {
  constructor(private readonly newsletterService: NewsletterService) {}

  @Get()
  getHello(): string {
    return this.newsletterService.getHello();
  }
}
