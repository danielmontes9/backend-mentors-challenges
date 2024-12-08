import { Module } from '@nestjs/common';
import { PhotoAiController } from './photo-ai.controller';
import { PhotoAiService } from './photo-ai.service';

@Module({
  imports: [],
  controllers: [PhotoAiController],
  providers: [PhotoAiService],
})
export class PhotoAiModule {}
