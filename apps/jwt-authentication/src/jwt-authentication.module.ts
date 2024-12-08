import { Module } from '@nestjs/common';
import { JwtAuthenticationController } from './jwt-authentication.controller';
import { JwtAuthenticationService } from './jwt-authentication.service';

@Module({
  imports: [],
  controllers: [JwtAuthenticationController],
  providers: [JwtAuthenticationService],
})
export class JwtAuthenticationModule {}
