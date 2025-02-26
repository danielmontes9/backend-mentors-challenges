import { Module } from '@nestjs/common';
import { SearchingImageController } from './searching-image.controller';
import { SearchingImageService } from './searching-image.service';
import { ClientIdInterceptor } from './core/interceptors/client-id.interceptor';
import { HttpModule } from '@nestjs/axios';
import { HttpErrorsInterceptor } from './core/interceptors/http-errors.interceptor';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 3,
        },
      ],
    }),
    HttpModule,
  ],
  controllers: [SearchingImageController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpErrorsInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    ClientIdInterceptor,
    SearchingImageService,
  ],
})
export class SearchingImageModule {}
