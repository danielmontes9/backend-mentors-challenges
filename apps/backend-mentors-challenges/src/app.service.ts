import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getPort(): number {
    return this.configService.get<number>('PORT', 3000);
  }

  getUNSPLASH_URL(): string {
    return this.configService.get<string>('UNSPLASH_URL');
  }
}
