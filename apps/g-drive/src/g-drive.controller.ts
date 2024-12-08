import { Controller, Get } from '@nestjs/common';
import { GDriveService } from './g-drive.service';

@Controller()
export class GDriveController {
  constructor(private readonly gDriveService: GDriveService) {}

  @Get()
  getHello(): string {
    return this.gDriveService.getHello();
  }
}
