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

  async getPhotosList(): Promise<any> {
    const url = `${this.UNSPLASH_URL}/photos`;

    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }

  async getRandomPhoto(query?: string): Promise<any> {
    const url = `${this.UNSPLASH_URL}/photos/random?query=${query || ''}&`;

    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }

  async getPhotoById(id: string): Promise<any> {
    const url = `${this.UNSPLASH_URL}/photos/${id}`;

    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }
}
