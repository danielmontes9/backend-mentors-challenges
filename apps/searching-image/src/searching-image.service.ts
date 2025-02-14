import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SearchingImageService {
  private readonly UNSPLASH_URL =
    this.configService.get<string>('UNSPLASH_URL');

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getRandomPhoto(query?: string): Promise<any> {
    const accessKey = this.configService.get<string>('UNSPLASH_ACCESS_KEY');

    const url = `${this.UNSPLASH_URL}/photos/random?query=${query || ''}&client_id=${accessKey}`;

    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }
}
