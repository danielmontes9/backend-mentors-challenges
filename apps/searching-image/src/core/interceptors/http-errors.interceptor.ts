import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class HttpErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        console.error('🚨 Interceptor Axios Error:', error.message);

        if (error.response) {
          return throwError(
            () =>
              new HttpException(
                error.response.data || 'Error with external API!',
                error.response.status || HttpStatus.INTERNAL_SERVER_ERROR,
              ),
          );
        }

        return throwError(
          () =>
            new HttpException(
              'Unknown error!',
              HttpStatus.INTERNAL_SERVER_ERROR,
            ),
        );
      }),
    );
  }
}
