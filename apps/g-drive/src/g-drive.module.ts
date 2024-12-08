import { Module } from '@nestjs/common';
import { GDriveController } from './g-drive.controller';
import { GDriveService } from './g-drive.service';

@Module({
  imports: [],
  controllers: [GDriveController],
  providers: [GDriveService],
})
export class GDriveModule {}
