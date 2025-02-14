import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { SearchingImageController } from 'apps/searching-image/src/searching-image.controller';
import { SearchingImageService } from 'apps/searching-image/src/searching-image.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    HttpModule,
  ],
  controllers: [AppController, SearchingImageController],
  providers: [AppService, SearchingImageService],
})
export class AppModule {}
