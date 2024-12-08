import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtAuthenticationService {
  getHello(): string {
    return 'Hello World!';
  }
}
