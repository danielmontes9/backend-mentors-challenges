import { Module } from '@nestjs/common';
import { SearchingImageController } from './searching-image.controller';
import { SearchingImageService } from './searching-image.service';
import { ClientIdInterceptor } from './core/interceptors/client-id.interceptor';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule],
  controllers: [SearchingImageController],
  providers: [ClientIdInterceptor, SearchingImageService],
})
export class SearchingImageModule {}
