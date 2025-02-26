import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
// import { AxiosRequestConfig } from 'axios';

@Injectable()
export class ClientIdInterceptor {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.setupInterceptor();
  }

  private setupInterceptor() {
    const accessKey = this.configService.get<string>('UNSPLASH_ACCESS_KEY');

    this.httpService.axiosRef.interceptors.request.use((config: any) => {
      if (!config.params) {
        config.params = {};
      }

      config.params['client_id'] = accessKey;
      return config;
    });
  }
}
