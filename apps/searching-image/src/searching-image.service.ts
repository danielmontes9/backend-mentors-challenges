import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { ImageModelDto } from './data/models/image.model.dto';
import {
  formatImageArrayData,
  formatImageData,
} from './utils/helpers/image.helper';
import { StadisticsModel } from './data/models/stadistics.model';

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

  async getPhotosList(): Promise<ImageModelDto[]> {
    const url = `${this.UNSPLASH_URL}/photos`;

    const response = await firstValueFrom(this.httpService.get(url));
    return formatImageArrayData(response.data);
  }

  async getRandomPhoto(query?: string): Promise<ImageModelDto> {
    const url = `${this.UNSPLASH_URL}/photos/random?query=${query || ''}&`;

    const response = await firstValueFrom(this.httpService.get(url));
    return formatImageData(response.data);
  }

  async getPhotoById(id: string): Promise<ImageModelDto> {
    const url = `${this.UNSPLASH_URL}/photos/${id}`;

    const response = await firstValueFrom(this.httpService.get(url));
    return formatImageData(response.data);
  }

  async getPhotoStadistics(id: string): Promise<StadisticsModel> {
    const url = `${this.UNSPLASH_URL}/photos/${id}/statistics`;

    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }

  async downloadPhoto(id: string): Promise<string> {
    const url = `${this.UNSPLASH_URL}/photos/${id}/download`;

    const response = await firstValueFrom(this.httpService.get(url));
    return response.data.url;
  }
}
