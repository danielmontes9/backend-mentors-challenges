import { Module } from '@nestjs/common';
import { SearchingImageController } from './searching-image.controller';
import { SearchingImageService } from './searching-image.service';
import { ClientIdInterceptor } from './core/interceptors/client-id.interceptor';
import { HttpModule } from '@nestjs/axios';
import { HttpErrorsInterceptor } from './core/interceptors/http-errors.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
@Module({
  imports: [HttpModule],
  controllers: [SearchingImageController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpErrorsInterceptor,
    },
    ClientIdInterceptor,
    SearchingImageService,
  ],
})
export class SearchingImageModule {}
