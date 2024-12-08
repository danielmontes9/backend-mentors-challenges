import { Injectable } from '@nestjs/common';

@Injectable()
export class GDriveService {
  getHello(): string {
    return 'Hello World!';
  }
}
