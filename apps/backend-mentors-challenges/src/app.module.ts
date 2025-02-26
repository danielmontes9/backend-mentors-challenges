import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SearchingImageModule } from 'apps/searching-image/src/searching-image.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    SearchingImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
