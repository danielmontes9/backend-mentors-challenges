import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ClientIdInterceptor implements NestInterceptor {
  private readonly accessKey = this.configService.get<string>(
    'UNSPLASH_ACCESS_KEY',
  );

  constructor(private readonly configService: ConfigService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    const separator = request.url.includes('?') ? '&' : '?';
    request.url = `${request.url}${separator}client_id=${this.accessKey}`;

    return next.handle().pipe(map((data) => data));
  }
}
