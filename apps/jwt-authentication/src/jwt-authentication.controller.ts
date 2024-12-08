import { Controller, Get } from '@nestjs/common';
import { JwtAuthenticationService } from './jwt-authentication.service';

@Controller()
export class JwtAuthenticationController {
  constructor(private readonly jwtAuthenticationService: JwtAuthenticationService) {}

  @Get()
  getHello(): string {
    return this.jwtAuthenticationService.getHello();
  }
}
