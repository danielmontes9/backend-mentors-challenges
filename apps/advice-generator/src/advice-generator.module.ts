import { Module } from '@nestjs/common';
import { AdviceGeneratorController } from './advice-generator.controller';
import { AdviceGeneratorService } from './advice-generator.service';

@Module({
  imports: [],
  controllers: [AdviceGeneratorController],
  providers: [AdviceGeneratorService],
})
export class AdviceGeneratorModule {}
