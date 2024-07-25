import { Injectable } from '@nestjs/common';

// A basic service with a sigle method.

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
