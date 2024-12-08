import { Module } from '@nestjs/common';
import { TherapistAiController } from './therapist-ai.controller';
import { TherapistAiService } from './therapist-ai.service';

@Module({
  imports: [],
  controllers: [TherapistAiController],
  providers: [TherapistAiService],
})
export class TherapistAiModule {}
