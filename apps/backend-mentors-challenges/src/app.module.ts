import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdviceGeneratorService } from 'apps/advice-generator/src/advice-generator.service';
import { AdviceGeneratorController } from 'apps/advice-generator/src/advice-generator.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
  ],
  controllers: [AppController, AdviceGeneratorController],
  providers: [AppService, AdviceGeneratorService],
})
export class AppModule {}
