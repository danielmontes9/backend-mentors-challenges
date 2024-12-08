import { Module } from '@nestjs/common';
import { SearchingImageController } from './searching-image.controller';
import { SearchingImageService } from './searching-image.service';

@Module({
  imports: [],
  controllers: [SearchingImageController],
  providers: [SearchingImageService],
})
export class SearchingImageModule {}
