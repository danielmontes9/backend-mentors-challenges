import { Module } from '@nestjs/common';
import { SearchingImageController } from './searching-image.controller';
import { SearchingImageService } from './searching-image.service';
import { ClientIdInterceptor } from './client-id.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [SearchingImageController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClientIdInterceptor,
    },
    SearchingImageService,
  ],
})
export class SearchingImageModule {}
